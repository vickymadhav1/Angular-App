import { Component } from '@angular/core';
import { Router }from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-userregis',
  templateUrl: './userregis.component.html',
  styleUrls: ['./userregis.component.css']
})
export class UserregisComponent 
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

this._http.post('home/api/userrgis',a, options)
       .subscribe(data => {
             alert('Registered Successfully');
             this.router.navigate(['home/api/userlogin']);
       }, error => {
         //  console.log(JSON.stringify(error.json()));
           alert("hehehehe") 
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

   