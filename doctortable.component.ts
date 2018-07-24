import { Component,OnInit } from '@angular/core';
import {AdmindataService} from '../admindata.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-doctortable',
  templateUrl: './doctortable.component.html',
  styleUrls: ['./doctortable.component.css'],
  providers:[AdmindataService]
})
export class DoctortableComponent implements OnInit
 {
  addData:boolean=false;
  test1:any[];
  constructor(private tests:AdmindataService)
  {
    this.tests.getData().subscribe((testdData)=>this.test1=testdData)
  }
   ngOnInit()
   {}
   deleteData(name:any,x:any)
{
console.log(name);
this.tests.deleteData(name).subscribe((testData)=>this.test1=testData)
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
