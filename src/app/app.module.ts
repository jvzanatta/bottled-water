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


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent,
    BannerComponent,
    TopBarComponent,
    ProductListComponent,
    ProductSortComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    HttpClientModule,
    HttpModule,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
