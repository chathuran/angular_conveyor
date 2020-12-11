import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  text: string;
  batchProducts: BatchProduct[];
  scannedProducts: Cart[];
  woiProducts: any;
  orders:Order[];

  results: string[];
  promiseProducts:any;
  promiseOrders:any;
  batchId:any;
  constructor(private http: HttpClient) {

    // console.log( http.get("http://demo7987289.mockable.io/orders"));
    this.promiseOrders=new Promise((resolve, reject) =>
      this.http.get("http://demo7987289.mockable.io/orders")
        .subscribe(
          response => {
            console.log("test");
            resolve(response);
          },
          error => {
            console.log(error);
            reject(error);
          }
        )
    );
    // console.log(http.get("http://demo7987289.mockable.io/batchproducts"));

    this.promiseProducts = new Promise((resolve, reject) =>
      this.http.get("http://demo7987289.mockable.io/batchproducts")
        .subscribe(
          response => {
            console.log("test");
            resolve(response);
          },
          error => {
            console.log(error);
            reject(error);
          }
        )
    );


    this.promiseOrders.then(response => {

        console.log(response);
        this.orders= response;

      },
      error => {
        console.log(error);
      });

    this.promiseProducts.then(response => {

        console.log(response);
        this.batchProducts = response["batchProducts"];
        this.batchId = response["batchNo"];
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }
  popItem(){
    delete this.batchProducts[0];

    this.batchProducts.pop();
    console.log(this.batchProducts);
  }
}

export interface Cart {
  binLoc ;
  order;
  sku;
  total;
  products: OrderProduct[];

}
export interface Batch {
  batchNo;
  batchProducts: BatchProduct[];
}
export interface BatchProduct {
  productId;
  status;
}
export interface Order {
  order;
  products: OrderProduct[];
}
export interface OrderProduct {

  productId;
  count;

}
