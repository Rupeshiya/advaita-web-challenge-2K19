import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ResponseFromApi } from '../response';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  // method to add product
  addProduct(productInfo){
    const url = '/products/add';
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<ResponseFromApi>(url,productInfo,{headers: headers});
  }

  // get all the products 
  getAllProducts(){
    const url = '/products';
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get<ResponseFromApi>(url,{headers: headers});
  }

  // get one product
  getProductById(id){
    const url = `/products/${id}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get<ResponseFromApi>(url,{headers: headers});
  }

  // delete product
  deleteProductById(id){
    const url = `/products/${id}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.delete<ResponseFromApi>(url,{headers: headers});
  }

  // bid now 
  onBidNowFormSubmit(bidderInfo,id){
    const url = `/products/bidnow/${id}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<ResponseFromApi>(url,bidderInfo,{headers: headers});
  }
  checkValidity(id){
    const url = `/products/validity/${id}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get<ResponseFromApi>(url,{headers: headers});
  }
  checkBidResult(id){
    const url = `/products/bidresult/${id}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get<ResponseFromApi>(url,{headers: headers});
  }
  

}
