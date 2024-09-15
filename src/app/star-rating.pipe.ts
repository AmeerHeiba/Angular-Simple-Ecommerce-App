import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating',
  standalone: true
})
export class StarRatingPipe implements PipeTransform {

  transform(rating: number, totalStars: number = 5): boolean[] {
    return Array(totalStars).fill(false).map((_, i) => i < rating);
  }

}
