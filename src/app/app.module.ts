import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CustomerComponent } from './customer/customer.component';
import { BalanceDetailComponent } from './balance-detail/balance-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreditCardComponent,
    CustomerComponent,
    BalanceDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
