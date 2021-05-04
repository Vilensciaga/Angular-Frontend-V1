import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './post/createpost/createpost.component';
import { EditpostComponent } from './post/editpost/editpost.component';
import { ViewpostComponent } from './post/viewpost/viewpost.component';
import { AuthguardService } from './services/authguard.service';
import { ErrorrouteComponent } from './views/errorroute/errorroute.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'createpost',
    component:CreatepostComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'viewpost',
    component:ViewpostComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'editpost',
    component:EditpostComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'**',
    component: ErrorrouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
