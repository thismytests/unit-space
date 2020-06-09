import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// containers
import {GiphyModule} from './containers/giphy';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {routing} from './routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,

    // containers
    GiphyModule,

    // router
    RouterModule.forRoot(routing),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
