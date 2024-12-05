import { Component } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import { Input } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})

public clientes: array>Cliente>
public cliente: Cliente = new Cliente(0,"",'',0,0);
idCliente:number=0;

export class ComponenteComponent {

    @Input () cliente:Cliente = new Cliente(0,"",'',0,0);
    @Input () posicion:number = 0;

    public modificarCliente(){
      this.cliente=this.cliente;
      this.clientes = this._servicioCliente.getCliente();
      this.clientes[this.posicion]=this.cliente;
  }
}


