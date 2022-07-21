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