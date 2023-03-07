import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {SidebarComponent} from "./components/layout/sidebar/sidebar.component";
import {NavbarComponent} from "./components/layout/navbar/navbar.component";
import { ListComponent } from './pages/user/list/list.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { NavbarMenuComponent } from './components/layout/navbar/navbar-menu/navbar-menu.component';
import { ProfileMenuComponent } from './components/layout/navbar/profile-menu/profile-menu.component';
import { SettingsComponent } from './pages/user/settings/settings.component';
import { MenuItemComponent } from './components/sidebar/menu-item/menu-item.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    ListComponent,
    NavbarMenuComponent,
    ProfileMenuComponent,
    SettingsComponent,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularSvgIconModule.forRoot()
  ]
})
export class DashboardModule { }
