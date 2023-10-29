// import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ToastModule } from 'primeng/toast';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalendarModule } from 'primeng/calendar';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { TrendingsComponent } from './components/trendings/trendings.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { DummyLoginComponent } from './components/dummy-login/dummy-login.component';
import { environment } from 'src/environments/environment';
import { CommonService } from './services/common.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesMainComponent } from './components/articles-main/articles-main.component';
import { SignupComponent } from './components/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MessagesComponent,
    SideNavComponent,
    DummyComponent,
    TrendingsComponent,
    MainLayoutComponent,
    DummyLoginComponent,
    ArticlesMainComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    NgSelectModule,
    CalendarModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, HttpClientModule,

  ],
  providers: [AuthService, CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
