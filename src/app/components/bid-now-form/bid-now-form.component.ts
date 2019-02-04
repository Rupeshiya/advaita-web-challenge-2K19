import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { ProductServiceService } from '../../services/product-service.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-bid-now-form',
  templateUrl: './bid-now-form.component.html',
  styleUrls: ['./bid-now-form.component.css']
})
export class BidNowFormComponent implements OnInit {
email: any;
bidderName: any;
bidPrice: any;
bidProductId: any;

  constructor(
    public authService: AuthService,
    private router: Router,
    private productService: ProductServiceService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.bidProductId = params.id;
    });
  }

  // on done bid now form 
  onDoneClick(){
    const bidderInfo = {
      bidderEmail: this.email,
      bidderName: this.bidderName,
      bidPrice: this.bidPrice,
      bidProductId: this.bidProductId
    };
   
    this.productService.onBidNowFormSubmit(bidderInfo,this.bidProductId).subscribe((res)=>{
      if(res.success){
        console.log('bidder info saved !!');
        this.flashMessage.show('Successfully bidded !!',{cssClass: 'alert-success', timeout:2000});
      } else {
        this.flashMessage.show('Something went wrong !!',{cssClass: 'alert-danger', timeout:2000});
      }
    });
  }

}
