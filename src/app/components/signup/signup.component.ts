import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public registerUserData = { username:'', email:'', password_hash:'',phonenumber:'' ,location:'', role: 'User'} ;
  constructor(private _auth: AuthService,
    private _router: Router
    ) { }

  ngOnInit() {
  }
  registerUser() {
    // console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {console.log(res)
          localStorage.setItem('token', res.token);
          localStorage.setItem('user_id', res.user_id);
          console.log(res.user_id);
          this._router.navigate(['login'])
        },
        err => console.log(err)
      );
  }

}
