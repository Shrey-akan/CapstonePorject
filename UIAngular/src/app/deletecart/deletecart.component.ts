import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-deletecart',
  templateUrl: './deletecart.component.html',
  styleUrls: ['./deletecart.component.css']
})
export class DeletecartComponent implements OnInit{

  constructor(private b1:CustService) { }

   ngOnInit(): void {
       
   }

   deletecart(cartdata:{value:any;}){
    return this.b1.deletecart(cartdata.value).subscribe();
   }
}
