import { Pipe, PipeTransform } from '@angular/core';
import { DataModel } from '../model/data';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(jobs: DataModel[], inputText: string, defaultFilter: boolean): any {
    if (inputText == ''){
      return jobs;
    }

    if (!Array.isArray(jobs)){
      return jobs;
    }

    if (inputText && Array.isArray(jobs)) {
      let filterKeys = Object.keys(inputText);

      if (defaultFilter) {
        return jobs.filter(item =>
            filterKeys.reduce((x, keyName) =>
                (x && new RegExp(inputText[keyName], 'gi').test(item[keyName])) || inputText[keyName] == "", true));
      }
      else {
        return jobs.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(inputText[keyName], 'gi').test(item[keyName]) || inputText[keyName] == "";
          });
        });
      }
    }
  }
}
