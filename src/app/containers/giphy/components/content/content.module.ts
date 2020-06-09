import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// root component
import {ContentComponent} from './root/content.component';
import {ItemModule} from './componens/item';


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,

    // components
    ItemModule
  ],
  exports: [ContentComponent]
})
export class ContentModule {
}
