import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AuthGuardService } from './auth-guard.service';

const oRoutes: Routes = [
{
  path: '', component: LoginPageComponent
},
{
  path: 'welcome-page', component: WelcomePageComponent, canActivate: [AuthGuardService]
},
{
  path: 'customer-page', component: CustomerPageComponent, canActivate: [AuthGuardService]
},
{
  path: 'orders-page', component: OrderPageComponent, canActivate: [AuthGuardService]
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    WelcomePageComponent,
    CustomerPageComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(oRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
