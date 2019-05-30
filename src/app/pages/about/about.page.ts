import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
})

export class AboutPage implements OnInit {

  componentes: ListOrder[] = [
    {
      icon: 'american-football',
      name: 'Alert Page',
      redirectTo: '/alert',
    },
    {
      icon: 'appstore',
      name: 'Home Page',
      redirectTo: '/home',
    }
  ];

  constructor() {

  }

  ngOnInit() {

  }
}

interface ListOrder {
  icon: string,
  name: string,
  redirectTo: string,
}
