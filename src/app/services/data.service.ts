import { Injectable } from '@angular/core';

//Hacer peticiones con HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
