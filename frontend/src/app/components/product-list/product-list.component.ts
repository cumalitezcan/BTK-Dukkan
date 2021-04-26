import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  productAddedToBasket:boolean=false;

  constructor(private productService:ProductService,private basketService:BasketService ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
    })
  }

  addToBasket(product:Product){
    this.productAddedToBasket=false;
    this.basketService.addBasket({productId:product.id,userId:2,count:1,id:0}).subscribe(response=>{
      this.productAddedToBasket=true;
    })
  }

}
