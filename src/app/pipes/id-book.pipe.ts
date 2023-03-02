import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idBook'
})
export class IdBookPipe implements PipeTransform {

  transform(value: number): string {
    
   return "ref-" + value;
  }

}
