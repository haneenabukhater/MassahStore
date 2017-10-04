import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDuplicates',
  pure: false
})
export class FilterDuplicatesPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    return input.filter(e => e.Body);
  }

}
