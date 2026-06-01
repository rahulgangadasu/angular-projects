import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number | null, inputUnit: 'C' | 'F', outputUnit?: 'C' | 'F') {
    let val: any;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let output: number;
    if (inputUnit === 'C' && outputUnit === 'F') {
      output = val * (9 / 5) + 32;
    } else if (inputUnit === 'F' && outputUnit === 'C') {
      output = (val - 32) * (5 / 9);
    } else {
      output = val;
    }

    let symbol: 'C' | 'F';
    if (!outputUnit) {
      symbol = inputUnit === 'C' ? 'C' : 'F';
    } else {
      symbol = outputUnit === 'C' ? 'C' : 'F';
    }

    return `${output.toFixed(2)} °${symbol}`;
  }
}
