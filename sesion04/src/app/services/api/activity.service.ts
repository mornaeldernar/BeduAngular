import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient : HttpClient) { }
  private url = 'https://www.boredapi.com/api/activity/';

  getActivity() {
    return this.httpClient.get(this.url);
  }
}
