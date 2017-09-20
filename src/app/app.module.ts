import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { HttpModule } from '@angular/http';
import { ProductsListPage } from '../pages/products-list/products-list';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductHttp } from '../providers/product-http';
import { CartProvider } from '../providers/cart';
import { MyCartPage } from '../pages/my-cart/my-cart';
import { ButtonCartComponent } from '../components/button-cart/button-cart';

@NgModule({
  declarations: [
    MyApp,
    ProductsListPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductDetailPage,
    MyCartPage,
    ButtonCartComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{},{
      links:[
        {component: ProductsListPage , segment:'products', name: 'Products'},
        {component: ProductDetailPage , segment:'products/:product/detail', name: 'ProductDetail'},
        {component: MyCartPage , segment:'my-cart', name: 'MyCart'},
      ]
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductsListPage,
    ContactPage,
    HomePage,
    ProductDetailPage,
    TabsPage,
    MyCartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductHttp,
    CartProvider
  ]
})
export class AppModule {}