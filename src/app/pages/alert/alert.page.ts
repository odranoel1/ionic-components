import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public AlertCtrl : AlertController ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Okay',
          cssClass: 'primary',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alertPrompt = await this.AlertCtrl.create({
      header: 'Login Form',
      subHeader: 'Add your username',
      inputs: [
        {
          name: 'getName',
          type: 'text',
          placeholder: 'Username'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Login',
          handler: ( data ) => {
            console.log('Confirm Access', data);
            this.titulo = data.getName;
          }
        }
      ]
    });

    await alertPrompt.present();
  }

}
