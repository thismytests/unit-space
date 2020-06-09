// routing
import {Route} from '@angular/router';

// containers
import {GiphyModule} from './containers/giphy';

export const routing: Array<Route> = [
  {
    path: '**',
    redirectTo: '/giphy',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   loadChildren: () => import('./containers/giphy').then(m => m.GiphyModule),
  //   // canActivate: [AuthGuard],
  //   // data: { preload: true }
  // },
];
