import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

// api
// todo ... will be discussed
import {GiphyService} from '../../commons/api/giphy.service';

// modules
import {ControlersModule} from './components/controlers';
import {ContentModule} from './components/content';
import {PaginatorModule} from './components/paginator';

// root component
import {GiphyComponent} from './root/giphy.component';
import {routing} from './routing';

@NgModule({
  imports: [
    CommonModule,
    // modules
    ControlersModule,
    ContentModule,
    PaginatorModule,

    //  routing
    RouterModule.forChild(routing),
  ],
  declarations: [GiphyComponent],
  providers: [GiphyService],
  exports: [
    GiphyComponent
  ]

})
export class GiphyModule {
}
