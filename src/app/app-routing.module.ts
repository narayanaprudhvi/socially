import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { DummyLoginComponent } from './components/dummy-login/dummy-login.component';
import { ArticlesMainComponent } from './components/articles-main/articles-main.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'home', component:HomeComponent},
  { path: 'conversations', component:MessagesComponent},
  { path: 'dummy', component:DummyComponent},
  { path: 'dummy-login', component:DummyLoginComponent},
  { path: 'trendings', component:ArticlesMainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
