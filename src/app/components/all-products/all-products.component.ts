import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "src/app/services/product-service.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth-service.service";
import { FlashMessagesService } from "angular2-flash-messages";
import {
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatDialog
} from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-all-products",
  templateUrl: "./all-products.component.html",
  styleUrls: ["./all-products.component.css"]
})
export class AllProductsComponent implements OnInit {
  products: any;
  validty: any;
  bidWinner: any;
  productId: any;
  userdata: any;
  userEmail: any;
  rightTODelete: any;
  productIdToDelete: any = [];

  constructor(
    private productService: ProductServiceService,
    private router: Router,
    public authService: AuthService,
    private flashMessage: FlashMessagesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllProducts();
    this.flashMessage.show(
      "Note:- Bid less than latest bid is not acceptable .",
      { cssClass: "alert-danger", timout: 5000 }
    );
    this.getProductOwner();
  }

  // load all the products
  getAllProducts() {
    this.productService.getAllProducts().subscribe(res => {
      if (res.success) {
        this.products = res.products;
      } else {
        console.log("something went wrong in the server !!");
      }
    });
  }

  // delete product
  onDeleteProductClick(id) {
    this.productService.deleteProductById(id).subscribe(res => {
      if (res.success) {
        this.router.navigate(["/allProducts"]);
        window.location.reload();
        this.flashMessage.show("Product deleted !!", {
          cssClass: "alert-success",
          timeout: 3000
        });
      } else {
        this.flashMessage.show("Something went wrong !!", {
          cssClass: "alert-success",
          timeout: 3000
        });
      }
    });
  }

  // method for bidding now
  onBidNowClick(id) {
    this.router.navigate([`/bidnow/${id}`]);
  }

  // on bid result click
  onBidResultClick(id) {
    this.checkValidity(id);
    this.checkBidResult(id);
  }

  // validity
  checkValidity(id) {
    this.productService.checkValidity(id).subscribe(res => {
      if (res.success) {
        if (res.validity) {
          console.log("valid !!");
          this.flashMessage.show("Auction is live now !!", {
            cssClass: "alert-success",
            timeout: 2000
          });
        } else {
          this.checkBidResult(id);
        }
      }
    });
  }

  checkBidResult(id) {
    this.productService.checkBidResult(id).subscribe(res => {
      if (res.success) {
        console.log("response-", res);
        this.bidWinner = res.bidWinPerson;
        // this.flashMessage.show(
        //   `Congratulations !! ,Till now product goes to ${this.bidWinner}`,
        //   { cssClass: "alert-success", timeout: 8000 }
        // );
        this.openDialog(this.bidWinner);
      } else {
        this.flashMessage.show("OOps!! , Something went wrong !!", {
          cssClass: "alert-danger",
          timeout: 2000
        });
      }
    });
  }
  openDialog(winner) {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: "500px",
      data: winner
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      // this.dialogResult = result;
    });
  }

  getProductOwner() {
    this.userdata = this.authService.getUsersLocalStorage();
    console.log("userdata ", this.userdata);
    this.userEmail = this.userdata.email;
    console.log("useremail-", this.userEmail);
    // console.log('useremail json-', JSON.parse(this.userEmail));
    this.getRightTODelete();
  }

  getRightTODelete() {
    this.productService.getAllProducts().subscribe(res => {
      if (res.success) {
        res.products.forEach(product => {
          if (product.productOwnerEmail === this.userEmail) {
            this.rightTODelete = true;
            this.productIdToDelete.push(product._id);
            console.log("this.right", this.rightTODelete);
            console.log("productIdToDelete-", this.productIdToDelete);
          } else {
            this.rightTODelete = false;
            console.log("this.right", this.rightTODelete);
          }
        });
      }
    });
  }
}
