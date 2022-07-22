### Peticiones HTTP tradicionales 

- Lo primero siempre es importar el HttpClientModule para poder hacer peticiones htttp

#### en el componente
```
constructor(private usuarioService: UsuariosService){

    //llamar al servicio 
    this.usuarioService.obtenerUsuario()
    .subscribe(resp => {
      
      console.log(resp);
    })

  }
```

#### en el servicio 
```
 constructor(private http: HttpClient) { }

  //metodo para obtener usuarios 
  obtenerUsuario(){
    return this.http.get('https://reqres.in/api/user');
  }
```

### Peticiones con interceptores 
funciona como un componente de servicio en angular 

``ng g s interceptors/nombreInterceptor``

se define en el servicio de la siguiente manera importando todos los paquetes

```
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //el interceptor deje pasar todo que tenga una valvula abierta 
    console.log('req paso por el interceptor');
    return next.handle(req);
    
  }
}
```

se tiene que llamar en el app.module con la siguiente estructura 

```
 providers: [

    //Estructura de un interceptor 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
],
```