import { Component, OnInit } from '@angular/core';
import {  Student } from 'src/app/students'
import { MyservService } from 'src/app/myserv.service';
import { Router } from '@angular/router';
import {ExportService} from 'src/app/export.service';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

 tempdata : Student[];
 tfname:string;
 tlname:string;
 tid:number;
 searchstring:string;
 orderstring:string='fname';

constructor(private tempservice:MyservService,private _router: Router,
  private excelService:ExportService){
  
}



ngOnInit(){
  
this.tempservice.getList().subscribe((data)=>(this.tempdata=data));
}


updatecall(i:number){
  this.tempservice.updateid=i;
  console.log("In update call:"+this.tempservice.updateid);
  this._router.navigate(['updatecontact']);
  
}
deletecall(i:number){
  this.tempservice.deleteid=i;
  this.tempservice.Deletestudent(i).subscribe((data)=>{this._router.navigate(['deletecomponent']);});
}



getnames(tfname:string,tlname:string,tid:number){
  this.tfname=tfname;
  this.tlname=tlname;
  this.tid=tid;
}


exportAsXLSX():void {
  this.excelService.exportAsExcelFile(this.tempdata, 'sample');   
}
}