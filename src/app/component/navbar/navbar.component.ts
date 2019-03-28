import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }
  public app_name: string = "Pack Meat";
  public isLogged: boolean = false;

  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if(auth){
        console.log('user loged');
        this.isLogged = true;
      }else{
        console.log('not logged');
        this.isLogged = false;
      }
    });
  }
  onLogout(){
    this.afsAuth.auth.signOut()
  }
}
