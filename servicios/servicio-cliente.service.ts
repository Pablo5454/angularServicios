import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {
  public clientes:Array<Cliente>;

  constructor() {
    this.clientes =[
      new Cliente(1, 'Begoña', 'Begoñez', 18, 1230),
      new Cliente(2, 'Bagoña', 'Bagoñez', 58, 3430),
      new Cliente(3, 'Bigoña', 'Bigoñez', 16, 1234),
      new Cliente(4, 'Bogoña', 'Bogoñez', 14, 1344),

    ]
  }

  getCliente():Array<Cliente>{
    return this.clientes;
  }
}
