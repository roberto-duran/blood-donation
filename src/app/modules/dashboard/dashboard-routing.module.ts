import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {ListComponent} from "./pages/user/list/list.component";
import {SettingsComponent} from "./pages/user/settings/settings.component";
const routes: Routes = [
  {path: '',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: ListComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '**', redirectTo: 'list', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
