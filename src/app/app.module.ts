import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { SectionBalanceComponent } from './section-balance/section-balance.component';
import { SectionSuggestionComponent } from './section-suggestion/section-suggestion.component';
import { SectionCalenderComponent } from './section-calender/section-calender.component';
import { SectionPreferenceComponent } from './section-preference/section-preference.component';
import { SectionCpanelComponent } from './section-cpanel/section-cpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountDetailComponent,
    SectionBalanceComponent,
    SectionSuggestionComponent,
    SectionCalenderComponent,
    SectionPreferenceComponent,
    SectionCpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
