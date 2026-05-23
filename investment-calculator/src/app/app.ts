import { Component } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentData } from './investment-input.model';
import { InvestmentResults } from './investment-results/investment-results';
import { ResultsModel } from './results.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, UserInput, InvestmentResults],
})
export class AppComponent {
  resultsData?: ResultsModel[];

  onCalculateInvestmentResults(data: InvestmentData) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultsData = annualData;
  }
}
