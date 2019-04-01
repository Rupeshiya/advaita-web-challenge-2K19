import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./services/auth-service.service";
import { ValidateService } from "./services/validate-service.service";
import { HttpClientModule } from "@angular/common/http";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AllProductsComponent } from "./components/all-products/all-products.component";
import { BidNowFormComponent } from "./components/bid-now-form/bid-now-form.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CountdownTimerModule } from "ngx-countdown-timer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { MatSnackBarModule } from "@angular/material";
import { DialogComponent } from "./components/dialog/dialog.component";
import { ProductDetailsComponent } from './product-details/product-details.component';

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
    BidNowFormComponent,
    FooterComponent,
    DialogComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CountdownTimerModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule,
    FlashMessagesModule.forRoot()
  ],
  entryComponents: [DialogComponent],
  providers: [AuthGuard, AuthService, ValidateService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
