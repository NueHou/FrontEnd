import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  client: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.client = this.dataService.getClientById(+id!);
  }

  // Ação do botão "Editar"
  editClient(id: number): void {
    this.router.navigate(['/clients', id]);  // Redireciona para a tela de edição
  }

  // Ação do botão "Excluir"
  deleteClient(): void {
    this.dataService.deleteClient(this.client.id);
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }

  // Ação do botão "Voltar"
  goBack(): void {
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }
}
