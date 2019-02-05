import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
products: any;
validty: any;
bidWinner: any;
productId : any;

  constructor(
    private productService: ProductServiceService,
    private router: Router,
    public authService: AuthService,
    private flashMessage: FlashMessagesService
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

  // delete product
  onDeleteProductClick(id){
    this.productService.deleteProductById(id).subscribe((res)=>{
      if(res.success){
        this.router.navigate(['/allProducts']);
        window.location.reload();
        this.flashMessage.show('Product deleted !!',{cssClass: 'alert-success',timeout:3000});
      } else {
        this.flashMessage.show('Something went wrong !!',{cssClass: 'alert-success',timeout:3000});
      }
    });
  }

  // method for bidding now
  onBidNowClick(id){
    this.router.navigate([`/bidnow/${id}`]);
  }

  // on bid result click
  onBidResultClick(id){
    this.checkValidity(id);
    this.checkBidResult(id);
  }
  // validity
  checkValidity(id){
    this.productService.checkValidity(id).subscribe((res)=>{
      if(res.success){
        if(res.validity){
          console.log('valid !!');
          this.flashMessage.show('Auction is live now !!',{cssClass: 'alert-success', timeout: 2000});
        } else {
          this.checkBidResult(id);
        }
      }
    })
  } 

  checkBidResult(id){
    this.productService.checkBidResult(id).subscribe((res)=>{
      if(res.success){
        console.log('response-',res);
        this.bidWinner = res.bidWinPerson;
        this.flashMessage.show(`Congratulations !! ,This product goes to ${this.bidWinner}`,{cssClass: 'alert-success', timeout: 8000});
      } else {
        this.flashMessage.show('OOps!! , Something went wrong !!',{cssClass: 'alert-danger', timeout: 2000});
      }
    });
  }
  
  
}
