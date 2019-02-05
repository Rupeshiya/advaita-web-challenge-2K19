import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth-service.service';
import { ValidateService } from './services/validate-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { BidNowFormComponent } from './components/bid-now-form/bid-now-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AddProductComponent,
    AllProductsComponent,
    BidNowFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    
  ],
  providers: [AuthGuard,AuthService,ValidateService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
