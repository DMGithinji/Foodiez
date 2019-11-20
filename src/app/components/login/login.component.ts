import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserData = {email:'', password_hash: ''};

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  loginUser() {
    // console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          localStorage.setItem('user_id', res.user_id);
          let tokenInfo = this.getDecodedAccessToken(res.token); // decode token
          console.log(res.token);
          console.log(tokenInfo);
          this._router.navigate(['']);
        },
        err => console.log(err)
      );
  }

}
