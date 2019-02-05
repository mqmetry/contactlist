import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {  Student } from '../app/students'
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class MyservService {
  constructor(private http:HttpClient) {
     this.bufferobject=new Student();
    this.bufferobject2=new Student();}
  temp:any;
  updateid :number=0;
  deleteid:number=0;
  bufferobject:Student;
 bufferobject2:Student;
  url:string ="http://localhost:3000/students";
  





getList():Observable <Student[]>{
  return this.http.get<Student[]>(this.url);
} 


getstudent(i:number):Observable <Student>{
  return this.http.get<Student>(this.url+"/"+i);
}



createstudent(bufferobject:Student):Observable<void>{
console.log(JSON.stringify(bufferobject));
//bufferobject.id=5;
console.log("Function called");
return this.http.post<void>(this.url,bufferobject);
}

Updatestudent(obj:Student){
  return this.http.put<void>(`${this.url}/${this.updateid}`,obj);
}


Deletestudent(i:number):Observable<void>{
  return this.http.delete<void>(this.url+"/"+i);
  
}







} 

