import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetailsNewsComponent } from './component/details-news/details-news.component';
import { ListNewsComponent } from './component/admin/list-news/list-news.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { Page404Component } from './component/page404/page404.component';

const routes: Routes = [
  {path: '',component: HomeComponent}, 
  {path: 'news/:id', component: DetailsNewsComponent},
  {path: 'admin/list-news', component: ListNewsComponent},//TODO: only user auth
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent},//TODO: only user auth
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
