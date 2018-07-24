import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from'@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorregisComponent } from './doctorregis/doctorregis.component';
import { UserregisComponent } from './userregis/userregis.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmintableComponent } from './admintable/admintable.component';
import { UsertableComponent } from './usertable/usertable.component';
import { DoctortableComponent } from './doctortable/doctortable.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { Search1Pipe } from './search1.pipe';
import { Sort1Pipe } from './sort1.pipe';
import { SuccesfulComponent } from './succesful/succesful.component';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorregisComponent,
    UserregisComponent,
    UserloginComponent,
    DoctorloginComponent,
    AdminloginComponent,
    AdmintableComponent,
    UsertableComponent,
    DoctortableComponent,
    AboutComponent,
    CategoryComponent,
    SortPipe,
    SearchPipe,
    Search1Pipe,
    Sort1Pipe,
    SuccesfulComponent,
    ImgComponent,
   //SearchPipe1
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot([
                                                 {path:'about',component:AboutComponent},
                                                 {path:'home',component:HomeComponent,
                                                        children:[{path:'adminlogin',component:AdminloginComponent},
                                                                  {path:'doctorregis',component:DoctorregisComponent},
                                                                  {path:'doctorregis/succesful',component:SuccesfulComponent},
                                                                  {path:'userregis',component:UserregisComponent},  
                                                                  {path:'userregis/succesful',component:SuccesfulComponent},                                             
                                                                  {path:'doctorlogin',component:DoctorloginComponent},
                                                                  {path:'userlogin',component:UserloginComponent}]},
                                                 {path:'home/api/about',component: AboutComponent},
                                                 {path:'home/api/img',component: ImgComponent},
                                                 {path:'home/api/userlogin/usertable',component:UsertableComponent},
                                                 {path:'doctorlogin/doctortable',component:DoctortableComponent},
                                                 {path:'home/api/adminlogin/admintable',component:AdmintableComponent},   
                                                 {path:'doctortable',component:DoctortableComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
