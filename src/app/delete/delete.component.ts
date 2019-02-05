import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyservService } from '../myserv.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _router: Router,private tempservice:MyservService) {
    if(this.tempservice.deleteid===0){this._router.navigate(['contacts']);}
   }

  
  ngOnInit() {
    this.tempservice.deleteid=0;
    setTimeout(()=>{this._router.navigate(['contacts']);},1000);
  }
}
