import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products: any;
  constructor(
    private productService: ProductServiceService,
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  // load all the products
  getAllProducts(){
    this.productService.getAllProducts().subscribe((res)=>{
      if(res.success){
        this.products = res.products;
      } else {
        console.log('something went wrong in the server !!');
      }
    });
  }

  // method for bidding now
  onBidNowClick(id){
    this.router.navigate([`/bidnow/${id}`]);
  }

  // timer 
  
  
}
