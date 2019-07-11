import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/rests/restaurant.service';

@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})

export class RestaurantCardComponent  implements OnInit {

  constructor(private _restaurant: RestaurantService) { }

  restaurant = [];

  rest
  restrnts

  ngOnInit() {
    // console.log(this.restaurant);
    this._restaurant.getRestaurant()
      .subscribe(
        res => this.restaurant.push(res),
        err => console.log(err)
      );
  }

  getRest() {
    this.rest = this.restaurant[0].data;
    console.log(this.restaurant[0].data);
    this.restrnts = this.rest.slice(0, 5);
  }

}
