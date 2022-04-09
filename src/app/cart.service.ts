import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http : HttpClient) {}

  //Metodo para agregar productos al carrito
  addToCart(product: Product) {
    this.items.push(product);
  }

  //Metodo para traer los productos que contiene el carrito
  getItems() {
    return this.items;
  }

  //Metodo para limpiar el carrito
  clearCart() {
    this.items = [];
    return this.items;
  }

  //metodo para obtener precio de envio desde una API
  getShippingPrices(){
    return this.http.get<{type: String , price: number}[]>('/assets/shipping.json');
  }
}
