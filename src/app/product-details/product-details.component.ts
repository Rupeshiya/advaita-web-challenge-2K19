import { Component, OnInit, Inject } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Route, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  id: any;
  constructor(
    public dialogRef: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: string,
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) { }

  onCloseClick() {
    console.log("dialogue closed from client side !!");
    this.dialogRef.close();
  }
  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   this.id = params.id;
    //   this.getProductDetails(this.id);
    // })
  }
  // getProductDetails(id) {
  //   this.productService.getProductById(id).subscribe((product) => {
  //     console.log('product details called !!');
  //     this.product = product;
  //     console.log('product fetched by id is ', this.product);
  //   });
  // }
}
