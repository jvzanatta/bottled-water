import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent,
    BannerComponent,
    TopBarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
