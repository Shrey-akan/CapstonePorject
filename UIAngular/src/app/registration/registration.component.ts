import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  constructor(private b1:CustService) { }


ngOnInit(): void {
    
}
insertstudent(studentdetails:{value:any;}){
  return this.b1.insertstudrecord(studentdetails.value).subscribe();
}
}
