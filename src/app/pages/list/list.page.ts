import { Component, OnInit } from '@angular/core';
//Usar servicio para hacer peticiones con HttpClient
import { DataService } from '../../services/data.service';

//Define a datatype
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private dataService: DataService) { }

  usuarios: Observable<any>;

  ngOnInit() {

    //Check the data is correct!
    // this.dataService.getUsers().subscribe(console.log);

    this.usuarios = this.dataService.getUsers();
  }

}
