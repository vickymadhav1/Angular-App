import { Component,OnInit } from '@angular/core';
import {AdmindataService} from '../admindata.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
  providers:[AdmindataService]
})
export class UsertableComponent implements OnInit
 {
  addData:boolean=false;
  test2:any[];
  constructor(private test:AdmindataService)
  {
    this.test.getData().subscribe((testdData)=>this.test2=testdData)
  }
   ngOnInit()
   {}
   deleteData(name:any,x:any)
{
console.log(name);
this.test.deleteData(name).subscribe((testData)=>this.test2=testData)
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
  
  
   