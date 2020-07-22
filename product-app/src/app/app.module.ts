import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ProductNamePipe } from './product-name.pipe';
import { FormsModule } from '@angular/forms'
import { from } from 'rxjs';
import { FilterbyNamePipe } from './filterby-name.pipe';
import { RatingComponent } from './rating/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    ProductNamePipe,
    FilterbyNamePipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
