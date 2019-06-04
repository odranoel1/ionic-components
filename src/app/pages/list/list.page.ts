import { Component, OnInit, ViewChild } from '@angular/core';
//Usar servicio para hacer peticiones con HttpClient
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

//Define a datatype
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList; //Buscamos el objeto lista de la vista : IonList (Permite llamar cualquier método que tenga la lista)

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    //Check the data is correct!
    // this.dataService.getUsers().subscribe(console.log);

    this.usuarios = this.dataService.getUsers();
  }

  favorite(user) {
    console.log('favorite', user); //Imprimir la opcion pulsada, y el usuario
    this.lista.closeSlidingItems(); //Cerrar sliding item al pulsarlo
  }

  share(user) {
    console.log('share', user); //Imprimir la opcion pulsada, y el usuario
    this.lista.closeSlidingItems(); //Cerrar sliding item al pulsarlo
  }

  borrar(user) {
    console.log('borrar', user); //Imprimir la opcion pulsada, y el usuario
    this.lista.closeSlidingItems(); //Cerrar sliding item al pulsarlo
  }

}
