import { Component, OnInit } from '@angular/core';
import { CustService } from 'src/app/cust.service';

@Component({
  selector: 'app-deletedetail',
  templateUrl: './deletedetail.component.html',
  styleUrls: ['./deletedetail.component.css']
})
export class DeletedetailComponent implements OnInit{

  constructor(private b1:CustService) { }

  ngOnInit(): void {
      
  }

  deletestudent(studentdetails:{value:any;}){
    return this.b1.deleteservicestud(studentdetails.value).subscribe();
  }
}
