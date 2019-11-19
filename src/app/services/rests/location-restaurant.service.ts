import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationRestaurantService {

  private _restaurantUrl = 'https://foodiesapp.herokuapp.com/api/restaurant';
  constructor(private http: HttpClient) { }
  getRestaurants() {
    return this.http.get<any>(this._restaurantUrl);
  }
}