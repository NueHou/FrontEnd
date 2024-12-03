import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'; // Certifique-se de ter esse componente
import { ProductsComponent } from './products/products.component';

const routes: Routes = [

  
  { path: 'products', component: ProductsComponent },
  { path: 'list', component: ListComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'clients/:id', component: ClientsComponent },
  { path: 'client-detail/:id', component: ClientDetailComponent },
  { path: 'add-product', component: AddProductComponent }, // Rota para adicionar produtos
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent }, // Rota para '/products'
  { path: 'clients/:id/edit', component: ProductsComponent },
  { path: 'products/:id', component:  ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
