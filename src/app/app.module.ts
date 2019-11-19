import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import { MenuserviceService } from './services/menuservice.service'
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/tokeninterceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestComponent,
    MyordersComponent,
    LoginComponent,
    OrderSuccessComponent,
    AdminOrdersComponent,
    AdminCuisinesComponent,
    FoodCartComponent,
    NavbarComponent,
    SignupComponent,
    SuperAdminComponent,
    RestaurantCardComponent,
    FooterComponent,
    ReviewsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [RestaurantService, LocationRestaurantService, AuthService, MenuserviceService, AuthGuard,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
