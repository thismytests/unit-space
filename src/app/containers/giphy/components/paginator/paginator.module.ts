import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// root component
import {PaginatorComponent} from './root/paginator.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    NgbPaginationModule
  ],
  exports: [
    PaginatorComponent
  ]
})
export class PaginatorModule {
}
