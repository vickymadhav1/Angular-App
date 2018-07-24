import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdmindataService {

  id:any[];
  idno:any[];
  
  private _url1="http://localhost:3000/api/home/userlogin/usertable";
  private _url="http://localhost:3000/api/home/doctorlogin/doctortable";
 constructor(private _http:Http) { }
getData():Observable<any[]>
{
//doctor data
return this._http.get(this._url)
.map((response:Response)=> <any[]>response.json())

}
getdData():Observable<any[]>
 {
   //patient data
 return this._http.get(this._url1)
  .map((response:Response)=> <any[]>response.json())
  }
  
deleteData(name):Observable<any[]>
{
return this._http.delete(this._url+"/"+name)
.map(function(response:Response){{return <any>response.json()}})
}
}

  
 