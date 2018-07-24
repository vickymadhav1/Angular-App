import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(SearchPipe: any, searchText: any): any 
  {
    if(searchText == null) return SearchPipe;

    return SearchPipe.filter(function(SearchPipe){
       return SearchPipe.doctorname.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ;
       
           })
  }
}

