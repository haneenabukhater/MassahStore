import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'filterDuplicates',
  pure: false
})
export class FilterDuplicatesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
