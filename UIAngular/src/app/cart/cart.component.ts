import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  data:any;

  constructor(private b1:CustService) { }
  
  ngOnInit(): void {
    let responce = this.b1.viewcart();
    responce.subscribe((data1: any)=>this.data=data1);    
  }

}
