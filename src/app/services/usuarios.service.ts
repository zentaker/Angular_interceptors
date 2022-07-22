import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }


  //metodo para obtener usuarios 
  obtenerUsuario(){

    //manejar los parametros 
    let params = new HttpParams().append('page', '1');

    params = params.append('nombre', 'Fernando Herrera');

    const headers = new HttpHeaders({
      //token personalizado 
      'token-usuario' : 'AHDBAJDBJABD27277273'
    })

    //realizar la peticion 
    return this.http.get('https://reqres.in/api/user', {
      params: params,
      headers: headers
    }).pipe(
      //rxjs
      map( resp => {
        return resp['data'];
      })
    )
  }
}
