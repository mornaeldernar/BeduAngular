import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderizeService {

  constructor(private httpClient: HttpClient) { }
  url = '';
  genderize(name:string){
    return this.httpClient.get('https://api.genderize.io?name='+name);
  }
}
