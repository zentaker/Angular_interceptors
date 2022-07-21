import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }


  //metodo para obtener usuarios 
  obtenerUsuario(){
    return this.http.get('https://reqres.in/api/user');
  }
}
