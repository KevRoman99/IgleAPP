import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import { auth } from 'firebase/app';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  registerUser(email: string, password: string){
    return new Promise((resolve, reject)=>{
      this.afsAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }
  loginEmailUSer(email: string, password: string){
    return new Promise((resolve, reject) =>{
      this.afsAuth.auth.signInWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),
        err => reject (err));
    });
  }
  loginFacebookUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    
  }
  logoutUser(){
    return this.afsAuth.auth.signOut();
  }

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}
