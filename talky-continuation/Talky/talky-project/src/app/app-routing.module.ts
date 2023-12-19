import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthenticationComponent } from './login-authentication/login-authentication.component';
import { RegisterAuthenticationComponent } from './register-authentication/register-authentication.component';
import { UserPageComponent } from './user-page/user-page.component';
// import { SavedCollectionsComponent } from './saved-collections/saved-collections.component';
// import { HomePageComponent } from './home-page/home-page.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { HomepageComponent } from './home-page/home-page.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'register', component: RegisterAuthenticationComponent },
  { path: 'login', component: LoginAuthenticationComponent },
  { path: 'profile', component: UserPageComponent },
  { path: 'home', component: HomepageComponent },
  // { path: 'navbar', component: NavbarContentComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }