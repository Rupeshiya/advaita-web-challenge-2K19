import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
productName: any;
description: any;
time: any;
basePrice: any;
productOwnerEmail: any;

  constructor(
    private productService: ProductServiceService,
    private router: Router,
    private flashMessage: FlashMessagesService
    
  ) { }

  ngOnInit() {
  
  }

  // method to make call to add product
  onAddProductSubmit(){
    console.log('add product called !!');
    const productInfo = {
      productName: this.productName,
      description: this.description,
      basePrice: this.basePrice,
      validTill: this.time,
      productOwnerEmail: this.productOwnerEmail
    };
    this.productService.addProduct(productInfo).subscribe((res)=>{
      if(res.success){
        console.log('product saved !!');
        this.router.navigate(['/allProducts']);
        this.flashMessage.show('Successfully added !!',{cssClass: 'alert-success',timeout: 2000});
        // this.startCountDown(this.time);
      } else {
        this.flashMessage.show('Something went wrong !!',{cssClas: 'alert-danger',timeout: 2000});
      }
    });
  }
}
