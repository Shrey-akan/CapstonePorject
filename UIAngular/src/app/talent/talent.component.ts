import { Component, OnInit } from '@angular/core';
import { CustService } from '../cust.service';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit{

  constructor(private b1:CustService) { }

ngOnInit(): void {
    
}
contactdata(contactdeyail:{value:any;}){
  return this.b1.contactservice(contactdeyail.value).subscribe();
}
}
