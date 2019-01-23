
import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Country } from '../country';
import { State } from '../state';
import { Student } from '../students';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  phone_number:string;
  selectedCountry:Country = new Country(0, 'India'); 
  countries: Country[];
  states: State[];
  mycountry;
  temp:State[];
  selectedcityid:number=0;;
  employee:FormGroup;
  bufferobject:Student;
  bufferobject2:Student;
  tempstate:Country[]; 
  tempcity:State[];

  
  


  constructor(private fb:FormBuilder,private myservice:MyservService,private _router: Router) {
    if(this.myservice.updateid==0){this.cancelupdate();}
   }  
   

  ngOnInit() {
    
    this.bufferobject2 = new Student();
    this.bufferobject = new Student();
    console.log(this.bufferobject2);
    this.myservice.getstudent(this.myservice.updateid).subscribe((obj)=>{this.myfunction(obj) ;
     });
      
    this.employee = this.fb.group({
    fname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    lname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    mail:['',Validators.email],
    phone:['',[Validators.required,Validators.min(6666666666),Validators.max(9999999999)]],
    birthdate:[,Validators.required]
  });
  
     
  }
   
  myfunction(obj){
  this.bufferobject2=obj;
  console.log(this.bufferobject2);
  this.employee.patchValue({
  fname:this.bufferobject2.fname,
  lname:this.bufferobject2.lname,
  mail:this.bufferobject2.mail,
  phone:this.bufferobject2.phone,
  birthdate:this.bufferobject2.birthdate
});
  }

submit():void{
    this.bufferobject.fname=this.employee.get("fname").value;
    this.bufferobject.lname=this.employee.get("lname").value;
    this.bufferobject.mail=this.employee.get("mail").value;
    this.bufferobject.phone=this.employee.get("phone").value.toString();
    this.bufferobject.birthdate = this.employee.get("birthdate").value.toString();
    this.bufferobject.city=this.bufferobject2.city,
    this.bufferobject.state=this.bufferobject2.state,
    this.bufferobject.country=this.bufferobject2.country,
    this.myservice.Updatestudent(this.bufferobject).subscribe(data => {this.myservice.updateid=0;this._router.navigate(['contacts']);});
    console.log("came back");
    }  

cancelupdate(){
  this._router.navigate(['contacts']);
}

}


