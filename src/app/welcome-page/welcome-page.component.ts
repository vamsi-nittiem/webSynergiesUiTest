import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  sUserName: string;
  loginSuccessKey: string;
  constructor(private oHttpClient: HttpClient, private oRouter: Router,
    private oAuthService: AuthService) { }

  ngOnInit(): void {
    // this.oAuthService.loginKeySub.subscribe((sLoginKey)=> {
    //   this.loginSuccessKey = sLoginKey;
    // })
    this.sUserName = this.oAuthService.sUserName;
  }

  logoutClick(){
    this.oHttpClient.get('https://test.greenkoncepts.com/gktest/logout?token=' + this.oAuthService.sLoginKey)
    .subscribe((respData) => {
      console.log('logout response: ', respData);
      this.oRouter.navigate(['/']);
    });
  }

  onCustomerTileClick(){
    this.oRouter.navigate(['/customer-page']);
  }

  onOrdersTileClick(){
    this.oRouter.navigate(['/orders-page']);
  }
}
