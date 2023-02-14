import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private httpClient : HttpClient) { }

  url = "https://api.sampleapis.com/coffee/hot";

  getCoffee () {
    return this.httpClient.get(this.url);
  }

}
