import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit{
  data:any;

  constructor(private b1:CustService) { }
  
  ngOnInit(): void {
    let responce = this.b1.viewcart();
    responce.subscribe((data1: any)=>this.data=data1);    
  }

}
