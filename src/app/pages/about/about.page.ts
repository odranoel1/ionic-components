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
      name: 'Home Page',
      redirectTo: '/home',
    },
    {
      icon: 'appstore',
      name: 'ActionSheet',
      redirectTo: '/actionsheet',
    },
    {
      icon: 'beaker',
      name: 'Alert Page',
      redirectTo: '/alert',
    },
    {
      icon: 'radio-button-on',
      name: 'Avatar Page',
      redirectTo: '/avatar',
    },
    {
      icon: 'appstore',
      name: 'Buttons Page',
      redirectTo: '/buttons',
    },
    {
      icon: 'card',
      name: 'Card Page',
      redirectTo: '/card',
    },
    {
      icon: 'appstore',
      name: 'Check Page',
      redirectTo: '/check',
    },
    {
      icon: 'calendar',
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
    },
    {
      icon: 'list',
      name: 'List Sliding Page',
      redirectTo: '/list'
    },
    {
      icon: 'reorder',
      name: 'List Reorder Page',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle',
      name: 'Loading Page',
      redirectTo: '/loading'
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
