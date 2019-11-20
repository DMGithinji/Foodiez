import { RestaurantService } from './../../services/rests/restaurant.service';
import { Review } from './../../services/reviews/reviews.model';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Menu } from '../../services/menu/menu.model';
import { Information } from '../../services/information/information.model';
import { Recipe } from '../../services/recipes/recipes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuserviceService } from '../../services/menuservice.service';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  public data: any;
  public restaurant: any;
  public infoData: any;
  public info: any;
  public foodsRes: any;
  public foods: any;
  public breakfast: any;
  public lunch: any;
  public supper: any;
  public menus: Menu[];


  reviews = [
    new Review(1, 'It was okay food', 3, '12:30pm 8/7/2019', 'Pizza Inn', 'Messi'),
    new Review(2, 'It was okay rice', 4, '12:30pm 8/7/2019', 'Steers', 'Iniesta'),
    new Review(3, 'It was okay pizza', 4, '12:30pm 8/7/2019', 'Debonairs', 'Mbappe'),
    new Review(4, 'It was okay dawa', 2, '12:30pm 8/7/2019', 'Java', 'Lugaga'),
    new Review(5, 'It was okay coffee', 1, '12:30pm 8/7/2019', 'Dormans', 'Rakitic')
    ];
    hideRs = true;
    hideMR1 = false;
    hideMR2 = false;

    Menu() {
      this.hideRs = true;
      this.hideMR1 = false;
      this.hideMR2 = false;
    }
    Reviews() {
      this.hideRs = false;
      this.hideMR1 = true;
      this.hideMR2 = false;    }
    Recipe() {
      this.hideRs = false;
      this.hideMR1 = false;
      this.hideMR2 = true;    }

    constructor(
      private menuserviceService: MenuserviceService,
      private _restaurant: RestaurantService,
      private route: ActivatedRoute,
      // private router: Router
      ) { }

    ngOnInit() {
      let id = this.route.snapshot.params['id'];
      this.getRestaurant(id);
      this.getRestaurantInfo(id);
      this.getRestaurantFoods(id);
      this.menus = this.menuserviceService.findAll();
      console.log(this.menus);
      // console.log(this.restaurant)

    }

    getRestaurant =(id)=>{
      this._restaurant.getRestaurant(id)
      .subscribe(res => {
            this.data = res;
            this.restaurant = this.data.data;
            console.log(`restaurant- ${this.restaurant}`);
          });
    }

    getRestaurantInfo =(id)=>{
      this._restaurant.getRestaurantInfo(id)
      .subscribe(res => {
        this.infoData = res;
        this.info = this.infoData.data[0];
        console.log(`info- ${this.info}`);
      });
    }

    getRestaurantFoods =(id)=>{
      this._restaurant.getRestaurantFoods(id)
      .subscribe(res => {
        this.foodsRes = res;
        this.foods = this.foodsRes.data;
        console.log(`foods- ${this.foods}`);
        this.breakfast = this.foods.filter(food => food.category.toLowerCase() === "breakfast");
        this.lunch = this.foods.filter(food => food.category.toLowerCase() === "lunch");
        this.supper = this.foods.filter(food => food.category.toLowerCase() === "dinner");
        console.log(`breakfast - ${this.breakfast}`);
        console.log(`lunch - ${this.lunch}`);
        console.log(`supper - ${this.supper}`);
      });
    }



}


