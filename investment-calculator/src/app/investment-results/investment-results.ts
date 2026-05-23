import { Component, Input } from '@angular/core';
import { ResultsModel } from '../results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  @Input() results?: ResultsModel[];
}
