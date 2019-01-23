import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _router: Router) { }

  
  ngOnInit() {
    this._router.navigate(['contacts']);
  }



}
async function delay(ms: number) {
  
}
