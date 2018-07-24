import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
         hello:any;
constructor(private _http:Http,private router:Router) {
{
          this.router.navigate(['api/about']);

      //  console.log(JSON.stringify(error.json()));
      //  alert("hehehehe") 

}}}