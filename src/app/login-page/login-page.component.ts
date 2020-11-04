import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

interface loginRespIntf{
  key: string;
  userName: string;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginSuccessKey: string;

  constructor(private oHttpClient: HttpClient, private oRouter: Router,
    private oAuthService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitClick(oLoginForm: NgForm){

    this.oHttpClient.get('https://test.greenkoncepts.com/gktest/login?username=' + oLoginForm.controls.username.value +
    '&password='+ oLoginForm.controls.password.value, ).subscribe((respData: loginRespIntf) => {
      console.log(respData);
      this.oAuthService.sLoginKey = respData.key;
      this.oAuthService.sUserName = respData.userName
      this.oAuthService.loginKeySub.next(respData.key);
      this.oRouter.navigate(['/welcome-page']);
    });
  }

}
