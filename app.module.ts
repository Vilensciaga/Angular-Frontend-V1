import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorrouteComponent } from './views/errorroute/errorroute.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HldirDirective } from './directives/hldir.directive';
import { CreatepostComponent } from './post/createpost/createpost.component';
import { EditpostComponent } from './post/editpost/editpost.component';
import { ViewpostComponent } from './post/viewpost/viewpost.component';
import { DeletepostComponent } from './post/deletepost/deletepost.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    ErrorrouteComponent,
    HldirDirective,
    CreatepostComponent,
    EditpostComponent,
    ViewpostComponent,
    DeletepostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
