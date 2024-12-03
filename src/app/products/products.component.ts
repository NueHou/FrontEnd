import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Importar ActivatedRoute para pegar o ID da rota
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product = { id: 0, name: '', description: '', price: 0 };

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,  // Para pegar o ID da rota
    private router: Router
  ) {}

  ngOnInit(): void {
    // Verificar se estamos editando um produto
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      // Carregar o produto existente para edição
      const existingProduct = this.dataService.getProductById(id);
      if (existingProduct) {
        this.product = existingProduct; // Atribuir o produto encontrado ao modelo
      } else {
        // Se o produto não for encontrado, redireciona para a lista
        this.router.navigate(['/list']);
      }
    }
  }

  updateProduct(id: number): void {
    this.router.navigate(['/products', id]);  // Redireciona para a tela de edição
  }

  onSubmit() {
    if (this.product.id === 0) {
      // Novo produto
      this.dataService.addProduct(this.product);  // O ID será gerado no serviço de dados
    } else {
      // Produto existente, atualiza os dados
      this.dataService.updateProduct(this.product);
    }
    // Redireciona para a lista de produtos após salvar
    this.router.navigate(['/list']);
  }

  cancel() {
    // Redireciona para a lista de produtos ao cancelar
    this.router.navigate(['/list']);
  }
}
