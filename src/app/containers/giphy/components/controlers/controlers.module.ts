import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// components
import {ControlersComponent} from './root/controlers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ControlersComponent],
  imports: [
    CommonModule,

    //  forms
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ControlersComponent]
})
export class ControlersModule {
}
