import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ProductsComponent } from './components/products/products.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CheckOutProductsComponent } from './components/check-out-products/check-out-products.component';
import { CheckOutSubtotalComponent } from './components/check-out-subtotal/check-out-subtotal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CheckOutComponent,
    ProductsComponent,
    CheckOutProductsComponent,
    CheckOutSubtotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
