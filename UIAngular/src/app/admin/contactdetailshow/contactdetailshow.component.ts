import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustService } from 'src/app/cust.service';

@Component({
  selector: 'app-contactdetailshow',
  templateUrl: './contactdetailshow.component.html',
  styleUrls: ['./contactdetailshow.component.css']
})
export class ContactdetailshowComponent implements OnInit{
  data:any;

  constructor(private b1:CustService) { }

  ngOnInit(): void {
      let responce = this.b1.viewservicecontact();
      responce.subscribe((data1: any)=>this.data=data1);
  }

}
