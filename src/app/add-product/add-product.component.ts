import { Component } from '@angular/core';
import { DataService } from '../data.service'; // Certifique-se de importar o serviço de dados
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'

 
})
export class AddProductComponent {
cancel() {
throw new Error('Method not implemented.');
}
  product = {
    name: '',
    cpf: '',
    address: '',
    description:'',
    price:''
  
  };
  
  constructor(private dataService: DataService, private router: Router) {}

  
  onSubmit() {
    this.dataService.addProduct(this.product); 
    this.router.navigate(['/products']); 
  }
}
