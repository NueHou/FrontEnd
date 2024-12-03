import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: any[] = [];
  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.clients = this.dataService.getClients();
    this.products = this.dataService.getProducts(); // Carrega os produtos
  }
}
