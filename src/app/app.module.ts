import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ProductsComponent } from './products/products.component'; // Importe o ProductsComponent
import { ProductDetailComponent } from './product-detail/product-detail.component'; // Importe o ProductDetailComponent
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    
    ProductsComponent,
    AppComponent,
    ListComponent,
    AddClientComponent,
    ClientsComponent,
    ClientDetailComponent,
    ProductsComponent, // Adicione o ProductsComponent
    ProductDetailComponent, // Adicione o ProductDetailComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    RouterModule // Já está correto, mantendo-o aqui
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
}

)
export class AppModule { }
