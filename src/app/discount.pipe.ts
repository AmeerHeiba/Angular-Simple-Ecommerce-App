import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(price: number, discountPercentage?: number): SafeHtml {
    if (!discountPercentage || discountPercentage === 0) {
      return this.sanitizer.bypassSecurityTrustHtml(`${price.toFixed(2)} EGP`);
    }

    const discountAmount = price * (discountPercentage / 100);
    const discountedPrice = price - discountAmount;

    return this.sanitizer.bypassSecurityTrustHtml(`
      <span class="original-price" style="text-decoration: line-through;">${price.toFixed(2)} EGP</span> 
      <span class="discounted-price" style="color: green;">${discountedPrice.toFixed(2)} EGP</span>
    `);
  }
}
