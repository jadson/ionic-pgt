import { CartProvider } from './../../providers/cart';
import { Observable } from 'rxjs/Rx';
import { ProductHttp } from '../../providers/product-http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the ProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html'
})
export class ProductsListPage {

  products:Observable<Array<any>>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productHttp: ProductHttp,
    public cartProvaider: CartProvider,
    public toastCtrl: ToastController,
  ) {
  }

  ionViewDidLoad() {
    this.products = this.productHttp.query();
  }

  addItem(product){
    this.cartProvaider.addItem(product);
    let toast = this.toastCtrl.create({
      message: 'Produto adicionado no carrinho',
      duration: 3000
    });
    toast.present();
  }

}
