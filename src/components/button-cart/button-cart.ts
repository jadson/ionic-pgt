import { CartProvider } from '../../providers/cart';
import { Component } from '@angular/core';


/**
 * Generated class for the ButtonCartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-cart',
  templateUrl: 'button-cart.html'
})
export class ButtonCartComponent {

  text: string;

  constructor(public cartProvider: CartProvider) {

  }

}
