import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute,
              private cartService : CartService) {}

  //Implementar metodo para agregar producto al carrito
  addToCart(product : Product){
    this.cartService.addToCart(product);
    window.alert("El producto fue agregado al carrito");
  }

  ngOnInit(): void {
    //first get de product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // find the product that correspond with id provided in route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
