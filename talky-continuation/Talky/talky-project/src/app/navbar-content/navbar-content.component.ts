import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent {

  instagramLogoSource: string =  'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
  userImageSource: string = 'assets/lisa.png'

  constructor() { }

  ngOnInit(): void {
  }

}
