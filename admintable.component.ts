import { Component , OnInit} from '@angular/core';
import { SearchPipe } from '../search.pipe';
import { Search1Pipe } from '../search1.pipe';
import { SortPipe } from '../sort.pipe';
import { Sort1Pipe } from '../sort1.pipe';
import {AdmindataService} from '../admindata.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css'],
  providers:[AdmindataService]
})

export class AdmintableComponent implements OnInit {
   addData:boolean=false;
   id: Array<any>;//pateint
   idno: Array<any>;//doctor
   isDesc: boolean = false;
   isDesc1: boolean = false;
   column: string = 'doctorname';
   column1: string = 'patientname';
   direction: number;
   direction1: number;
   
   test:any[];
   test1:any[];
   constructor(private tests:AdmindataService){}
    ngOnInit()
    {
      this.tests.getData().subscribe((testData)=>this.test=testData)
    //  this.tests.getdData().subscribe((testdData)=>this.test1=testdData)
    }
   

sort(property){
  this.isDesc = !this.isDesc; //change the direction    
  this.column = property;
  this.direction = this.isDesc ? 1 : -1;
  
}
sort1(property1)
{
  this.isDesc1 = !this.isDesc1;
  this.column1 = property1;
  this.direction1 = this.isDesc1 ? 1 : -1;
}


   updateData()
  {
  if(this.addData==true)
  {
    this.addData=false;
  }
  else if(this.addData==false)
  {
    this.addData=true;
  }
}
 
}
