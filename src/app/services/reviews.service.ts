import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private _restaurantUrl = 'https://foodiesapp.herokuapp.com/api/restaurant';
  httpHeaders = new HttpHeaders({'Content-type': 'application/json',
});

  constructor(private http: HttpClient, private authService: AuthService) { }



  
  private generateHeaders() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + token
    }); 
    return headers;
  }

  postReview(restaurant_id, restaurant): Observable<any>{
    
  let options = { headers: this.generateHeaders() };
  const body = {
      review: restaurant.review,
      rating: restaurant.rating,
      posted: restaurant.posted,
      restaurant_id: restaurant.restaurant_id,
      user_id: restaurant.user_id,
    };
    return this.http.post(this._restaurantUrl+'/'+restaurant_id+'/reviews', body, options);
  }

  getReviews(restaurant_id) {
    return this.http.get<any>(this._restaurantUrl+'/'+restaurant_id+'/reviews');
  }

  deleteReview(restaurant_id, review_id) {
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer ' + token
    // }); 
    // let options = { headers: headers};
    return this.http.delete<any[]>(`${this._restaurantUrl}/${restaurant_id}/reviews/${review_id}`);
  }
}
