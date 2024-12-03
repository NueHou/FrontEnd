import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  editProduct(product: { id: number; name: string; description: string; price: number; }) {
    throw new Error('Method not implemented.');
  }

  private clients = [
    { id: 1, name: 'Cliente A', cpf: '123.456.789-00', address: 'Rua A' },
    { id: 2, name: 'Cliente B', cpf: '987.654.321-00', address: 'Rua B' }
  ];

  private products = [
    { id: 1, name: 'Produto A', description: 'Descrição A', price: 100 },
    { id: 2, name: 'Produto B', description: 'Descrição B', price: 200 }
  ];

  constructor() {}

  // Retorna todos os clientes
  getClients() {
    return this.clients;
  }

  // Obtém um cliente pelo ID
  getClientById(id: number) {
    return this.clients.find(client => client.id === id);
  }

  // Adiciona um cliente
  addClient(client: any) {
    const newId = this.clients.length > 0 ? Math.max(...this.clients.map(c => c.id)) + 1 : 1;
    client.id = newId;
    this.clients.push(client);
  }

  // Atualiza um cliente
  updateClient(updatedClient: any) {
    const index = this.clients.findIndex(client => client.id === updatedClient.id);
    if (index !== -1) {
      this.clients[index] = updatedClient;
    }
  }

  // Exclui um cliente pelo ID
  deleteClient(id: number) {
    this.clients = this.clients.filter(client => client.id !== id);
  }

  // Retorna todos os produtos
  getProducts() {
    return this.products;
  }

  // Obtém um produto pelo ID
  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }

  // Adiciona um produto
  addProduct(product: any) {
    const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    product.id = newId;
    this.products.push(product);
  }

  // Atualiza um produto
  updateProduct(updatedProduct: any) {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  // Exclui um produto pelo ID
  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
