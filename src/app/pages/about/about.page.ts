import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
})

export class AboutPage implements OnInit {

  componentes: ListOrder[] = [
    {
      icon: 'appstore',
      name: 'Home Page',
      redirectTo: '/home',
    },
    {
      icon: 'appstore',
      name: 'ActionSheet',
      redirectTo: '/actionsheet',
    },
    {
      icon: 'appstore',
      name: 'Alert Page',
      redirectTo: '/alert',
    },
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
