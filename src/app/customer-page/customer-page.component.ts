import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  sSavedResponse = '';

  constructor(private oHttpClient: HttpClient, private oAuthService: AuthService,
    private oRouter: Router) { }

  ngOnInit(): void {
  }

  onSaveClick(oAddCustDetailsForm: NgForm){
    console.log(oAddCustDetailsForm.controls);
   this.oHttpClient.post('https://test.greenkoncepts.com/gktest/createCustomer?token=' + this.oAuthService.sLoginKey,
   {
    customerName: oAddCustDetailsForm.controls.customerName.value,
    customerAge: oAddCustDetailsForm.controls.customerAge.value,
    customerAddress: oAddCustDetailsForm.controls.customerAddress.value
   }).subscribe((respData) => {
     console.log("Cust Save Click response: ", respData);
     this.sSavedResponse = 'Details have been saved successfully !!!'
   });
  }

  backClick(){
    this.oRouter.navigate(['/welcome-page']);
  }

  cancelClick(){
    this.oRouter.navigate(['/welcome-page']);
  }

}
