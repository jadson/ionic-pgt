import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductHttp {

  constructor(public http: Http) {
    console.log('Hello ProductHttpProvider Provider');
  }

  query():Observable<Array<any>>{
   return this.http.get('http://localhost:3000/products')
      .map(response =>response.json());
  }

  get(id: number):Observable<Array<Object>>{
    return this.http.get(`http://localhost:3000/products/${id}`)
       .map(response =>response.json());
   }
}
