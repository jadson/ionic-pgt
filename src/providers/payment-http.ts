import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the PaymentHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentHttpProvider {

  constructor(public http: Http) {
    console.log('Hello PaymentHttpProvider Provider');
  }

  getSession():Observable<Object>{
    return this.http.get('http://localhost:8000/session.php')
      .map(response => response.json());
  }

  doPayment(data):Observable<Object>{
    return this.http.get('http://localhost:8000/payment.php',data)
    .map(response => response.json());
  }

}
