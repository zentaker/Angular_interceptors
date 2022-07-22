import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  //escuchar cualquier peticion que lanze la aplicacion 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //el interceptor deje pasar todo que tenga una valvula abierta 
    console.log('req paso por el interceptor');
    //return next.handle(req);

    //colocarle un headers
    const headers = new HttpHeaders({
      //token personalizado 
      'token-usuario' : 'AHDBAJDBJABD27277273'
    });
      //manejar los parametros 
      let params = new HttpParams().append('page', '1');

      params = params.append('nombre', 'Fernando Herrera');
      
    //una vez que ews utilizada la req ya no puede volver a ser utilizada
    const reqClone = req.clone({
      headers: headers,
      params:params
      //se pudiese agregar parametros params : params

    })

    //en vez de llamar a la req se llama a la requiest
    return next.handle(reqClone).pipe(
      //manejar el error en el interceptor
      catchError(this.mensajeEror)

      //en esta zona se pueden guardar los logs de las peticiones 
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
