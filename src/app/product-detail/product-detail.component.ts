import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.dataService.getProductById(+id!);
  }

  // Ação do botão "Editar"
  editProduct(id: number): void {
    this.router.navigate(['/products', id]);  // Redireciona para a tela de edição
  }

  // Ação do botão "Excluir"
  deleteProduct(): void {
    this.dataService.deleteProduct(this.product.id);
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }

  // Ação do botão "Voltar"
  goBack(): void {
    this.router.navigate(['/list']);  // Redireciona de volta para a listagem
  }
}
