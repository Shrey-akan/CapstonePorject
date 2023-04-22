import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustService } from 'src/app/cust.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit{

  constructor(private b1:CustService , private router:Router) { }
  username:any;
  password:any;
  val:any;

  ngOnInit(): void {
      
  }
  admindata(data:any){
    console.log(data);
    this.username = data.username;
    this.password = data.password;
    let repo = this.b1.adminlogin(this.username , this.password);
    console.log(repo);
    if(repo == true){
      alert("LOGIN SUCCESSFULL");
      this.val=true;
      
    }
    else{
      alert("PLEASE TRY AGAIN AND ENTER VALID USERNAME AND  PASSWORD");
      this.router.navigate(['/adminlogin']);
    }
  }
}
