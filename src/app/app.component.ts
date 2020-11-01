import { Component } from '@angular/core';
import { Tool } from './tool';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'employee-management-system';
    opened=true;

    menuItems: Tool[] = [
      {
        label: 'SignUp',
        icon: 'login',
        showOnMobile: true,
        showOnTablet: true,
        showOnDesktop: true
      },
      {
        label: 'About',
        icon: 'help',
        showOnMobile: false,
        showOnTablet: true,
        showOnDesktop: true
      },
      {
        label: 'Pricing',
        icon: 'attach_money',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
      {
        label: 'Docs',
        icon: 'notes',
        showOnMobile: false,
        showOnTablet: true,
        showOnDesktop: true
      },
      {
        label: 'Showcase',
        icon: 'slideshow',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
      {
        label: 'Blog',
        icon: 'rss_feed',
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: false
      },
    ];
  
}
