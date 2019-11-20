import { ReviewsService } from './../../services/reviews.service';
import { RestaurantService } from './../../services/rests/restaurant.service';
import { Review } from './../../services/reviews/reviews.model';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Menu } from '../../services/menu/menu.model';
import { Information } from '../../services/information/information.model';
import { Recipe } from '../../services/recipes/recipes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  public id;
  public rating: number = 0;
  public data: any;
  public restaurant: any;
  public infoData: any;
  public info: any;
  public reviewsData: any;
  public reviews: any;
  public foodsRes: any;
  public foods: any;
  public breakfast: any;
  public lunch: any;
  public supper: any;
  public menus: Menu[];
  public reviewForm: FormGroup;
  private user_id = localStorage.getItem('user_id');
  // private user = localStorage.getItem('user_id');

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
      private _restaurant: RestaurantService,
      private route: ActivatedRoute,
      private _review: ReviewsService
      // private router: Router
      ) { }

    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.getRestaurant( this.id);
      this.getRestaurantInfo( this.id);
      this.getRestaurantFoods( this.id);
      this.getReviews(this.id);
      // console.log(this.restaurant)
      this.reviewForm = new FormGroup({
        review: new FormControl('', [Validators.required]),
        rating: new FormControl(''),
      });
    }

    getRestaurant =(id)=>{
      this._restaurant.getRestaurant(id)
      .subscribe(res => {
            this.data = res;
            this.restaurant = this.data.data;
            // console.log(`restaurant- ${this.restaurant}`);
          });
    }

    getRestaurantInfo =(id)=>{
      this._restaurant.getRestaurantInfo(id)
      .subscribe(res => {
        this.infoData = res;
        this.info = this.infoData.data[0];
        // console.log(`info- ${this.info}`);
      });
    }

    getRestaurantFoods =(id)=>{
      this._restaurant.getRestaurantFoods(id)
      .subscribe(res => {
        this.foodsRes = res;
        this.foods = this.foodsRes.data;
        // console.log(`foods- ${this.foods}`);
        this.breakfast = this.foods.filter(food => food.category.toLowerCase() === "breakfast");
        this.lunch = this.foods.filter(food => food.category.toLowerCase() === "lunch");
        this.supper = this.foods.filter(food => food.category.toLowerCase() === "dinner");
        // console.log(`breakfast - ${this.breakfast}`);
        // console.log(`lunch - ${this.lunch}`);
        // console.log(`supper - ${this.supper}`);
      });
    }

    getReviews =(id)=>{
      this._review.getReviews(id)
      .subscribe(res => {
        this.reviewsData = res;
        this.reviews = this.reviewsData.data;
        console.log(`reviews- ${this.reviews}`);
      });
    }
    rate=(rating)=>{
      this.rating = rating;
      // console.log(this.rating);
    }

    public createReview = (reviewFormValue) => {
      if (this.reviewForm.valid) {
        this.postReview(reviewFormValue);
      }
    }

    private postReview = (reviewFormValue)=>{
      let newReview = {
        restaurant_id: parseInt(this.id),
        user_id: localStorage.getItem('user_id'),
        review: reviewFormValue.review,
        rating: this.rating,
        posted:  new Date()
      }
      console.log("The posted review is", newReview);
      this._review.postReview(this.id, newReview)
      .subscribe(res => {
        alert("Posted review successfully")
      },
      (error => {
        alert("Oops, something went wrong")
        console.log(error);
      })
      );
    }

    deleteReview= (review_id) => {
      this._review.deleteReview(review_id, this.user_id).subscribe(
        res => {
          this.getReviews(this.id);
          alert("Review deleted successfully")
        },
        error => {
          console.log(error);
          alert("Oops, something went wrong")
        }
      ); 
    }
}


