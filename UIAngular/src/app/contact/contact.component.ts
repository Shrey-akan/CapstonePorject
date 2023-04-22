import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  constructor(private b1:CustService) { }
  ngOnInit(): void {
      
  }
  
  contactdata(contactdeyail:{value:any;}){
    return this.b1.contactservice(contactdeyail.value).subscribe();
  }
}
