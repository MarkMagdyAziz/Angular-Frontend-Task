import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
})
export class SplitPipe implements PipeTransform {
  transform(text: string, by: string, index: number = 0) {
    let arr = text.split(by);
    return text.length > 12 ? arr[index] + ' ' + arr[index + 1] : text;
  }
}
