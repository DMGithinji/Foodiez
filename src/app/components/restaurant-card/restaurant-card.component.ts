import {
  Component,
  OnInit
} from '@angular/core';
import {
  RestaurantService
} from '../../services/rests/restaurant.service';
import {
  ActivatedRoute
} from '@angular/router'

@Component({
  selector: 'restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})

export class RestaurantCardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _restaurant: RestaurantService) {}

  public restaurant;
  locations: [];
  filteredLocations: any[];
  rest: any[];
  filteredRestaurants: [];
  restrnts
  restaurants;

  ngOnInit() {
      this.loadRestaurants();
  }

  loadRestaurants = () =>{
    this._restaurant.getRestaurants()
      .subscribe((res)=> {
        this.restaurants = res;
        this.restrnts = this.restaurants.data
        // console.log(this.restrnts);     
        this.locations = this.restrnts.map((resto)=> resto.location);
        this.filteredLocations = this.locations.filter((x, i, a)=> a.indexOf(x) == i);
      },
        err => console.log(err)
      );
  }

  getRest() {
    this.restrnts = this.restaurants.data;
    console.log(this.restrnts);
  }

  filterByLocation(location) {
    this.getRest()
    this.filteredRestaurants = this.restrnts.filter(resto => resto.location === location );
    this.restrnts = this.filteredRestaurants;
    // console.log(this.filteredRestaurants);
}

}
