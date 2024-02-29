import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {

  private clienteUrl: string;

  constructor(private http: HttpClient) {
    this.clienteUrl = 'https://jsonplaceholder.typicode.com/posts';
  }
  getClientes() {
    return this.http.get(this.clienteUrl, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  }

}