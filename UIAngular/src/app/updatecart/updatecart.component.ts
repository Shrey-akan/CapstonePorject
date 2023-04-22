import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-updatecart',
  templateUrl: './updatecart.component.html',
  styleUrls: ['./updatecart.component.css']
})
export class UpdatecartComponent implements OnInit{

  constructor(private b1:CustService) { }

  ngOnInit(): void {
  }

  updatecart(cartdata:{value:any;}){
    return this.b1.updatecart(cartdata.value).subscribe();
  }
}
