import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {GiphyItem} from './types';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  @Input() items: Array<GiphyItem> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
