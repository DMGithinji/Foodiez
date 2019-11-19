import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from './components/home/home.component';
import { RestComponent } from './components/rest/rest.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminCuisinesComponent } from './components/admin/admin-cuisines/admin-cuisines.component';
import { FoodCartComponent } from './components/food-cart/food-cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { SuperAdminComponent } from './components/super-admin/super-admin.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantService } from './services/rests/restaurant.service';
import { LocationRestaurantService } from './services/rests/location-restaurant.service';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent},
  {
    path: 'restaurant/:id',
    component: RestComponent},
  {
    path: 'foodcart',
    component: FoodCartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'orders',
    component: MyordersComponent,
    canActivate: [AuthGuard]},
  {
    path: 'admin/menu',
    component: AdminCuisinesComponent,
    canActivate: [AuthGuard]},
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard]},
  {
    path: 'login',
    component: LoginComponent},
  {
    path: 'sign-up',
    component: SignupComponent},
  {
    path: 'super-admin',
    component: SuperAdminComponent,
    canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

