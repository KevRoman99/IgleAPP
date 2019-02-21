import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { TouchSequence } from 'selenium-webdriver';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {}
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }

  onLogin(): void{
    this.authService.loginEmailUSer(this.email, this.password)
    .then((res) =>{
      this.redirect();
    }).catch(err => console.log('error', err.message));
    
  }
  onLoginGoogle(): void{
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.authService.loginGoogleUser()
    .then((res) =>{
      this.redirect();
    })
    .catch(err => console.log('error ', err.message));
    
  }
  onLoginFacebook(): void{
    this.authService.loginFacebookUser()
    .then((res) =>{
      this.redirect();
    }).catch(err => console.log('err', err.message));
  }
  onLogout(): void{
    this.authService.logoutUser();
  }
  redirect(): void{
    this.router.navigate(['admin/list-books']);
  }
}
