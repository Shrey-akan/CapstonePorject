import { Component, OnInit } from '@angular/core';
import { CustService } from 'src/app/cust.service';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit{

  constructor(private b1:CustService) { }

  ngOnInit(): void {
      
  }
  updatestudent(studentdetails:{value:any;}){
    return this.b1.updateservicestudent(studentdetails.value).subscribe();
  }
}
