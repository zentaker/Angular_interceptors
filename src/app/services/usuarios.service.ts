import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams , HttpErrorResponse} from '@angular/common/http';
import { catchError, map, throwError} from 'rxjs';

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
      }), 

      //llamando al error del metodo externo 
      //catchError(this.mensajeError);

      catchError(err => {
        console.log('sucedio un error ');
        console.log('Registrando en el log file ')

        // se puede guardar los logs de los errores 
        console.warn(err);

        return throwError('error personalizado')
      })
    )
  }

  //llamar al error de manera personalizada 
  mensajeError(error: HttpErrorResponse) {
    console.log('sucedio un error ');
    console.log('Registrando en el log file ')

    // se puede guardar los logs de los errores 
    console.warn(error);

    return throwError('error personalizado');

  }


  //Utilizando interceptor 

  obtenerUsuarioInterceptor() {


    //manejar los parametros 
    let params = new HttpParams().append('page', '1');

    params = params.append('nombre', 'Fernando Herrera');


    //realizar la peticion 
    return this.http.get('https://reqres.in/api/user', {
      params: params
    }).pipe(
      //rxjs
      map( resp => resp['data']), 
      //llamando al error del metodo externo 
      catchError(this.mensajeEror)
    )
  }

  //llamar al error de manera personalizada 
  mensajeEror(error: HttpErrorResponse) {
    console.log('sucedio un error ');
    console.log('Registrando en el log file ')

    // se puede guardar los logs de los errores 
    console.warn(error);

    return throwError('error personalizado');


  }
}
