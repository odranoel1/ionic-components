import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(public LoadingCtrl: LoadingController) { } //Inyeccion del componente

  ngOnInit() { //ngOnInit se dispara cuando la página entra

    setTimeout(()=>{
      this.loading.dismiss();
    }, 2000);

    this.presentLoading('Cargando...');
  }

  async presentLoading(mensaje:string) {
    this.loading = await this.LoadingCtrl.create({
      // message: 'Hellooo',
      // duration: 2000 Sólo si se sabe cuanto demora una tarea asycrona
      message: mensaje
    });
    return this.loading.present();
  }

}
