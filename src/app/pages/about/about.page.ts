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
    {
      icon: 'appstore',
      name: 'Avatar Page',
      redirectTo: '/avatar',
    },
    {
      icon: 'appstore',
      name: 'Buttons Page',
      redirectTo: '/buttons',
    },
    {
      icon: 'appstore',
      name: 'Card Page',
      redirectTo: '/card',
    },
    {
      icon: 'appstore',
      name: 'Check Page',
      redirectTo: '/check',
    },
    {
      icon: 'appstore',
      name: 'Datetime Page',
      redirectTo: '/datetime',
    },
    {
      icon: 'car',
      name: 'Fab Page',
      redirectTo: '/fab',
    },
    {
      icon: 'grid',
      name: 'Grid Page',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite',
      name: 'Infinite Scroll Page',
      redirectTo: '/infinite-scroll',
    },
    {
      icon: 'hammer',
      name: 'Inputs Page',
      redirectTo: '/inputs'
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
