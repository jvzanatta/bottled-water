import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StoreService } from './services/store.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductSortComponent } from './product-sort/product-sort.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OrderModule } from 'ngx-order-pipe';
import { ProductCartButtonComponent } from './product-cart-button/product-cart-button.component';
import { CartButtonComponent } from '@app/cart-button/cart-button.component';
import { CartComponent } from './cart/cart.component';
import { NgbModalModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent,
    BannerComponent,
    TopBarComponent,
    ProductListComponent,
    ProductSortComponent,
    ProductCartButtonComponent,
    CartButtonComponent,
    CartComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    OrderModule,
    HttpClientModule,
    HttpModule,
    NgbModalModule,
  ],
  exports: [
    CartComponent,
  ],
  providers: [
    HttpClientModule,
    HttpModule,
    StoreService,
  ],
  entryComponents: [
    CartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
