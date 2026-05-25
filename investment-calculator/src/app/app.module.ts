import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from './investment-results/investment-results';
import { AppComponent } from './app';

@NgModule({
  declarations: [AppComponent, Header, UserInput, InvestmentResults],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
