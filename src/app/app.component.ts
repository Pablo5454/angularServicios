import { Component } from '@angular/core';
import { Cliente } from './modelos/cliente';
import { ServicioClienteService } from './servicios/servicio-cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ServicioClienteService]
})
export class AppComponent {
  title = 'servicios';

  public clientes: Array<Cliente>;


  constructor(private _servicioClienteService: ServicioClienteService){
    this.clientes=this._servicioClienteService.getCliente();
  }

  public sacarDatos(posicion:number){
    // console.log(this.clientes[posicion].nombre);
    this.clientes[posicion].nombre;
  }

}
