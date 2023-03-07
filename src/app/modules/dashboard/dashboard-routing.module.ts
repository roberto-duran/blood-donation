import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'
import {DashboardComponent} from "./dashboard.component";

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/')
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      authOnly: true,
      authGuardPipe: redirectUnauthorizedToHome
    },
    canActivate: [AngularFireAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
