import { Component, OnInit } from '@angular/core';
import { CustService } from 'src/app/cust.service';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit{
    data:any;

  constructor(private b1:CustService) { }

  ngOnInit(): void {
    let responce = this.b1.vieewservicestudent();
    responce.subscribe((data1: any)=>this.data=data1);
  }
}
