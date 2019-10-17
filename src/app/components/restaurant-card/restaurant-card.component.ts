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

  restaurant = [];

  rest: any[];
  filteredRestaurants: any[];
  restrnts
  locations=[]
  locationSet;
  restaurants;


  ngOnInit() {
    this._restaurant.getRestaurant()
      .subscribe(
        res => this.restaurant.push(res),
        err => console.log(err)
      );
      this.loadRestaurants();

  }

  loadRestaurants = () =>{
    this._restaurant.getRestaurant()
      .subscribe((res:any[])=> {
        res => this.restaurant.push(res);
        if(res){
          this.rest = this.restaurant[0].data;
          this.restrnts = this.rest;   
          console.log(this.restrnts);     
        }
      },
        err => console.log(err)
      );
  }

  getRest() {
    this.restrnts = this.restaurant[0].data;
    console.log(this.restrnts);
    
  }


  filterByLocation(location) {
    this.filteredRestaurants = this.restrnts.filter(resto => resto.location === location );
    this.restrnts;
    console.log(this.filteredRestaurants);
}



}
