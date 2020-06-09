import {
  Component, OnDestroy,
  OnInit
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

// rxjs
import {take, takeUntil} from 'rxjs/operators';

// api
import {GiphyService} from '../../../commons/api/giphy.service';

// types
import {GiphyItem, ResponseData} from '../../../commons/api/giphy.types';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.sass']
})
export class GiphyComponent implements OnInit, OnDestroy {
  private readonly PARAM_PAGE_NAME = 'page';
  private readonly PARAM_SEARCH_NAME = 'search';

  constructor(public giphyService: GiphyService,
              private router: Router,
              private route: ActivatedRoute) {
    // todo... Misha
    this.currentPageUrlParam = this.route.snapshot.params[this.PARAM_PAGE_NAME] || 1;
  }


  private unsubscribe$ = new Subject<void>();

  /*paginator*/
  collectionSize = 0;
  pageSize = 0;


  foundItems: Array<GiphyItem> = [];

  currentSearchUrlParam = '';
  currentPageUrlParam = 1;

  ngOnInit(): void {
    this.currentSearchUrlParam = this.route.snapshot.params[this.PARAM_SEARCH_NAME];

    this.giphyService.search(this.currentSearchUrlParam)
      .pipe(take(1))
      .subscribe(data => {
        this.setControlsAndContentComponents(data);
      });
  }

  changeRouteParams(searchParam: string, pageParam: number) {
    this.router.navigate(['/giphy', {
      search: searchParam,
      page: pageParam
    }]);
  }

  setControlsAndContentComponents(data: ResponseData) {
    this.foundItems = data.data;
    this.collectionSize = data.pagination.total_count;
    this.pageSize = data.pagination.count;
  }

  onChangeControlsComponent($event) {
    this.currentSearchUrlParam = $event.search;
    this.currentPageUrlParam = 1;

    this.giphyService.search(this.currentSearchUrlParam)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        this.setControlsAndContentComponents(data);
      });


    this.changeRouteParams(this.currentSearchUrlParam, this.currentPageUrlParam);
  }

  onChangePagination($event: number) {
    this.currentPageUrlParam = $event;

    this.giphyService.search(this.currentSearchUrlParam, this.currentPageUrlParam)
      .subscribe(data => {
        this.setControlsAndContentComponents(data);
      });

    const offset = this.pageSize * this.currentPageUrlParam;
    this.changeRouteParams(this.currentSearchUrlParam, this.currentPageUrlParam);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
