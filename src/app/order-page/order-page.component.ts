import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  ordersData = [];
  constructor(private oHttpClient: HttpClient, private oAuthService: AuthService,
    private oRouter: Router) { }

  ngOnInit(): void {
   this.oHttpClient.get('https://test.greenkoncepts.com/gktest/getAllOrders?token=' + this.oAuthService.sLoginKey)
   .subscribe((respData: []) => {
     this.ordersData = respData;
    console.log("getAllOrders Response :", respData);
   });
  }

  backClick(){
    this.oRouter.navigate(['/welcome-page']);
  }
}
