import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search1'
})
export class Search1Pipe implements PipeTransform {

  transform(Search1Pipe: any, search1Text: any): any 
  {
   if(search1Text == null) return Search1Pipe;
 
   return Search1Pipe.filter(function(Search1Pipe){
      return  Search1Pipe.patientname.toLowerCase().indexOf(search1Text.toLowerCase()) > -1;
    })
  }
 }
 