import { Component } from '@angular/core';

@Component({
  selector: 'dhs-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {
  public isMenuOpen: boolean = false;
  constructor() {
  }


  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
