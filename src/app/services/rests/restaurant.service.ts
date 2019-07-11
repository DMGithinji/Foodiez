import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private _restaurantUrl = 'https://foodiesapp.herokuapp.com/api/restaurant';
  constructor(private http: HttpClient) { }

  getRestaurant() {
    return this.http.get<any>(this._restaurantUrl);
  }
}