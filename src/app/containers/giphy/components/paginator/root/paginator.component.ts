import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent {
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() collectionSize = 0;
  @Input() pageSize = 0;
  @Input() page = 0;

  onPageChange($event: number) {
    this.pageChange.emit($event);
  }

}
