import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment-service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  private investmentService = inject(InvestmentService);

  results = this.investmentService.resultsData.asReadonly();
}
