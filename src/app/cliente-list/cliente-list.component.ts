import { ClienteService } from '../shared/cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Array<any>;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getAll().subscribe(data => {
      this.clientes = data;
    });
  }

}
