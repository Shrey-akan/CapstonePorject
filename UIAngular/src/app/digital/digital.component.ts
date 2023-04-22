import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit{
  shoeImages : Boolean = false;
  bookh : boolean = false;
  constructor(private b1:CustService) { }

ngOnInit(): void {
    
}
showMoreImage(){
  this.shoeImages=!this.shoeImages;
}

addtocart(){
  alert(this.bookh=!this.bookh);
  
}

insertcart(cartdata:{value:any;}){
  return this.b1.addtocart(cartdata.value).subscribe();
}
}