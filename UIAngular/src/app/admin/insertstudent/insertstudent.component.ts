import { Component, OnInit } from '@angular/core';
import { CustService } from 'src/app/cust.service';


@Component({
  selector: 'app-insertstudent',
  templateUrl: './insertstudent.component.html',
  styleUrls: ['./insertstudent.component.css']
})
export class InsertstudentComponent implements OnInit{

  constructor(private b1:CustService) { }


ngOnInit(): void {
    
}
insertstudent(studentdetails:{value:any;}){
  return this.b1.insertstudrecord(studentdetails.value).subscribe();
}
}
