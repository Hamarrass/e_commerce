import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

maLimit: number;
  // @ts-ignore
  transform(value: string, args?: number): any {
    // @ts-ignore
    this.maLimit = (args) ? args : 30;
    return value.substr(0, this.maLimit) + '......';
  }

}
