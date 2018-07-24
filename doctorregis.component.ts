import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router }from '@angular/router';

@Component({
  selector: 'app-doctorregis',
  templateUrl: './doctorregis.component.html',
  styleUrls: ['./doctorregis.component.css']
})
export class DoctorregisComponent
 {
   password:any;
   confirmpassword:any;
  showpswd:boolean=false;

  showpwd:boolean=false;
  possible:string;
  name1:boolean;
  name2:boolean;
  valid :string[]=[];

  name:string;
  age:number;
  address:string;
 constructor(private _http:Http,private router:Router) { }
 
 ngOnInit() {
 }
 onSubmit(a)
 {
 this.name=a.name;
 this.age=a.age;
 this.address=a.address;
 console.log(this.name+this.age+this.address);
 console.log(a);
 var headers= new Headers();
 headers.append('Content-Type', 'application/json');
 let options = new RequestOptions({ headers: headers });
 
 this._http.post('/api/doctorrgis',a, options)
        .subscribe(data => {
              alert('Registered Successfully');
              this.router.navigate(['/home/doctorlogin'])
        }, error => {
            console.log(JSON.stringify(error.json()));
        })
 
 }
 
  alreadyExists()
  { 
    for(let i of  this.valid)
    {
    if(this.possible==i)
      {
        this.name1=true;
        this.name2=false;
        break;
      }
       else if(this.possible!==i)
      {
        this.name1=false;
        this.name2=true;
      
      }
    }
  }
  
  validPaswd()
  {
    if(this.password==this.confirmpassword)
    {
      this.showpswd=true;
      this.showpwd=false;
    }
    else if(this.password!=this.confirmpassword)
    {
      this.showpswd=false;
      this.showpwd=true;
    }
  }
  
}
