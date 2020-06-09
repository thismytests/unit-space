import {Injectable} from '@angular/core';

// rxjs
import {from, Observable} from 'rxjs';
// SDK
import GphApiClient from 'giphy-js-sdk-core';
import {map} from 'rxjs/operators';
import {GiphyItem, ResponseData} from './giphy.types';


// todo ... will be discussed
// https://github.com/Giphy/giphy-js/blob/master/packages/fetch-api/README.md
// https://giphy.api-docs.io/1.0/welcome/access-and-api-keys
// https://www.npmjs.com/package/giphy-js-sdk-core

// https://developers.giphy.com/dashboard/?create=true

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private readonly API_KEY = 'UYY3uvqPs5sCG1mC0WtpkRCVn1looVZY';

  public search(str: string, offset?: number): Observable<ResponseData> {
    const LIMIT = 9;
    const client = GphApiClient(this.API_KEY);

    return from(client.search('gifs',
      {
        q: str,
        limit: LIMIT,
        offset
      })).pipe(map((data: any) => {
      return data;
    }));

  }

  constructor() {
  }
}
