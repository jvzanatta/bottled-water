import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Store } from '@classes/store';
// creation and utility methods
import { Observable, Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, takeUntil, tap } from 'rxjs/operators';

import { environment } from '@env/environment';



const API_URL = environment.apiUrl;
const GET_URL = '/interviews/ce/feeds/store.js';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: Http) { }

  /**
   * Gets data from the exercise's endpoint.
   */
  public getStore(): Observable<Store> {
    return this.http.get(API_URL + GET_URL)
      .pipe(
        map(res => res.json())
      );
  }

}
