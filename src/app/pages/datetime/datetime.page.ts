import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss']
})

export class DateTimePage implements OnInit{

  bornDate: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() {

  }

  ngOnInit(){

    this.customPickerOptions = {
      buttons: [{
          text: 'Save',
          handler: (event) => {
            console.log('Clicked Save!');
            console.log(event);
          }
        },
        {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
          }
        }]
    }
  }

  setDate(event) {
    console.log('ionChange',event);
    //Change Date of ISO
    console.log('Date', new Date(event.detail.value));
  }
}
