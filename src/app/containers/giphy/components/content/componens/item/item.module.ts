import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// root component
import {ItemComponent} from './root/item.component';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ItemComponent]
})
export class ItemModule {
}
