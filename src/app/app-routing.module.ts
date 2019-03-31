import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AuthGuard } from "./guards/auth.guard";
import { AllProductsComponent } from "./components/all-products/all-products.component";
import { BidNowFormComponent } from "./components/bid-now-form/bid-now-form.component";
import { AddProductComponent } from "./components/add-product/add-product.component";

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "allProducts", component: AllProductsComponent },
  {
    path: "bidnow/:id",
    component: BidNowFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addProduct",
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
