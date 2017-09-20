import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {
  items: Array<any> =[];
  total = 0;

  addItem(item){
    this.items.push(item);
    this.calculateTotal();
  }

  removeItem(index){
    this.items.slice(index,1);
    this.calculateTotal();
  }

  calculateTotal(){
    let total = 0;
    this.items.forEach(item=>{
      total += Number(item.price);
    });
    this.total = total;
  }

}
