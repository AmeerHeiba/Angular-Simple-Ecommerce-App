import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: "products", component:ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: '**', component: NotFoundComponent } 
];
