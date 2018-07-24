import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort1'
})
export class Sort1Pipe implements PipeTransform {

  transform(records: Array<any>, args?: any): any {
    return records.sort(function(a, b){
        if(a[args.property1] < b[args.property1]){
            return -1 * args.direction1;
        }
        else if( a[args.property1] > b[args.property1]){
            return 1 * args.direction1;
        }
        else{
            return 0;
        }
    });
};
}
