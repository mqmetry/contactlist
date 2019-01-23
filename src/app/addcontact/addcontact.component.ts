import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../dataservice';
import { Country } from '../country';
import { State } from '../state';
import { Student } from '../students';
import { MyservService } from '../myserv.service';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css'],
  providers: [DataService]
})
 

export class AddcontactComponent implements OnInit {



  phone_number:string;
  selectedCountry:Country = new Country(0, 'India'); 
  countries: Country[];
  states: State[];
  mycountry;
  temp:State[];
  selectedcityid:number=0;;
  employee:FormGroup;
  bufferobject=new Student();
  tempstate:Country[]; 
  tempcity:State[];
  tempphone:string;
  formatted:string;
  flag:boolean=false;


  constructor(private fb:FormBuilder,private _dataService: DataService,private myservice:MyservService,private _router: Router) {
    this.countries = this._dataService.getCountries();
   }  


  ngOnInit() {
  this.employee = this.fb.group({
    fname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    lname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    mail:['',Validators.email],
    phone:['',[Validators.required,Validators.pattern('^[6-9]\\d{9}$')]],
    mycountry:[''],
    mystate:['',Validators.min(1)],
    city:[''],
    birthdate:[,Validators.required]
  });
  }
   
  structure(line:string){
   console.log(this.employee.get("phone").valid);
    if(line.length==10 && this.employee.get("phone").valid){
      
      this.tempphone=line;
      this.formatted = "+91-"+line.slice(0,3)+"-"+line.slice(3,7)+"-"+line.slice(7);
      this.employee.get('phone').clearValidators();
      this.employee.get('phone').updateValueAndValidity();
      this.employee.patchValue({'phone':this.formatted});
      this.flag=true;
      }
        else{
          if(this.flag && line.length!=15){
          this.employee.get('phone').setValidators([Validators.required,Validators.pattern('^[6-9]\\d{9}$')]);
          this.employee.get('phone').updateValueAndValidity();
          }
           if(line.length===15 && this.flag==true){
            this.employee.get('phone').setValidators([Validators.required,Validators.pattern('^[6-9]\\d{9}$')]);
          this.employee.get('phone').updateValueAndValidity();
            this.employee.patchValue({'phone':this.tempphone.slice(0,9)});
            this.flag=false;
          }
        }
  }


submit():void{
    this.bufferobject.fname=this.employee.get("fname").value;
    this.bufferobject.lname=this.employee.get("lname").value;
    this.bufferobject.mail=this.employee.get("mail").value;
    this.bufferobject.phone=this.tempphone;
    this.bufferobject.country="India";
    this.tempstate =  this._dataService.getCountries().filter((item)=> item.id == this.mycountry);
    this.bufferobject.state = this.tempstate[0].name;
    this.tempcity = this._dataService.getStates().filter((item)=> item.countryid == this.mycountry).filter((item)=> item.id == this.selectedcityid);
    this.bufferobject.city=this.tempcity[0].name;
    this.bufferobject.birthdate = this.employee.get("birthdate").value.toString();
    this.myservice.createstudent(this.bufferobject).subscribe(data => {console.log(data);this._router.navigate(['contacts']);});
   }  


  onSelect(countryid) {
    this.states = this._dataService.getStates().filter((item)=> item.countryid == countryid);
    this.mycountry=countryid;
  }

}