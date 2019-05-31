import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss']
})

export class CheckPage implements OnInit{

  //Array of objects
  public data = [
    { name: 'primary', isChecked: false },
    { name: 'secondary', isChecked: true },
    { name: 'tertiary', isChecked: true },
    { name: 'success', isChecked: false }
  ];

  constructor() {

  }

  ngOnInit() {

  }

  onClick(check) {
    return console.log(check);
  }
}
