import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(private usuarioService: UsuariosService){

    //llamar al servicio 
    this.usuarioService.obtenerUsuario()
    .subscribe(resp => {
      
      console.log(resp);
    })

  }
}
