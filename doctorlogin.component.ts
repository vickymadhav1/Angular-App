import { Component} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Router }from '@angular/router';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent 
{
  USERNAME:string;
  PASSWORD:string;
 
  constructor(private _http:Http,private router:Router) { }
  
    onSubmit(a)
  {
    console.log(a);
   var headers= new Headers();
     headers.append('Content-Type', 'application/json');
   let options = new RequestOptions({ headers: headers });
    
 this._http.post('/api/doctorlogin',a, options)
              .subscribe(data => {
                 alert("success");
                 this.router.navigate(['/doctortable'])

              }, error => {
              alert("invlaid user")
              //user to clear the input fields
              this.USERNAME="";
              this.PASSWORD="";
               console.log(JSON.stringify(error.json()));
           })
  
  }
  
}
