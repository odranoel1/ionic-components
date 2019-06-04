import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Batman','CatWoman','Joker','Robin']; //<-- Array of strings

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    // console.log(event);
    //Insertar y remover elementos de un arreglo splice(a partir de donde se mueve, cuantos se van a mover)
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];

    //Mover elemento a la posicion final (from)
    this.personajes.splice(event.detail.to,0,itemMover);

    event.detail.complete(); //Se llama la funcion que esta predeterminada
  }

  onClick() {
    console.log(this.personajes);
  }

}
