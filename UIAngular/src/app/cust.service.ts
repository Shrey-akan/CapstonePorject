import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustService {
  //SERVICES FOR STUDENNT DETAILS 
  inserturlc="http://localhost:9001/insertstudrecord";
  updateurl="http://localhost:9001/updatestuudentdetails"
  viewstudenturl="http://localhost:9001/viewstudentdetails";
  deleteurl="http://localhost:9001/deletestudentdetails"

  // SERVICES FOR CONTACT DETAILS 
  contacturl="http://localhost:9001/insertcontactrecord";
  viewcontacturl="http://localhost:9001/viewcontactdetails";

  //ADD TO CART SERVICE
  addurl="http://localhost:9001/insertcart";
  viewcarturl="http://localhost:9001/viewcart";
  cartupdateurl="http://localhost:9001/updatecart";
  deletecarturl="http://localhost:9001/deletecart";


  constructor(private h1 : HttpClient) { }

 // INSERT SERVICE FOR ADD TO CART
 addtocart(data:any){
  return this.h1.post(this.addurl,data);
 }

 //VIEW SERVICE FOR ADD TO CART 
 viewcart(){
  return this.h1.get(this.viewcarturl);
 }
  
 //UPDATE SERVICE FOR CART
 updatecart(data:any){
  return this.h1.post(this.cartupdateurl,data);
 }

 //DELETE SERVICE FOR CART
 deletecart(data:any)
 {
  return this.h1.post(this.deletecarturl,data);
 }



  //STUDENT SERVICE FOR  INSERT DATA DATABASE
  insertstudrecord(data:any)
  {
   return this.h1.post(this.inserturlc,data);
  }

  //UPDATE  STUDENT DETAILS
  updateservicestudent(data:any)
  {
   return this.h1.post(this.updateurl,data);
  }


   //DELETE  STUDENT DETAILS
   deleteservicestud(data:any)
   {
    return this.h1.post(this.deleteurl,data);
   }


  //FETCH STUDENT DETAILS 
  vieewservicestudent()
  {
    return this.h1.get(this.viewstudenturl);
  }





  //CONTACT FORM SERVICE FOR INSERTING INTO DATABASE
  contactservice(data:any){
    return this.h1.post(this.contacturl,data);
  }
  //CONTACT FORM SERVICE FOR FETCHING DATA FROMM DATABASE
  viewservicecontact()
  {
    return this.h1.get(this.viewcontacturl);
  }




    // ADMIN LOGIN CHECK
  islogin:any;
  adminlogin(username:any,password:any){
    this.islogin=(username=='admin' && password=='12345');
    console.log(this.islogin);
    localStorage.setItem("islogin",this.islogin?"true":"false");
    console.log(this.islogin);
    return (this.islogin);
  }
}
