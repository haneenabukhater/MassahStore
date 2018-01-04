import { Pipe, PipeTransform } from '@angular/core';
import { ProductService } from './product.service';

@Pipe({
  name: 'filterType',
  pure: false
})
export class FilterTypePipe implements PipeTransform {

  transform(input: any, category: string): any {
    if (category === 'all') return input;

    return input.filter( product => {
      return product.Tags==undefined || product.Tags.includes(category);
    });
  }

}
