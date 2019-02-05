import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { UpdateComponent } from './update/update.component';
import {  DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {path:'',component:ContactsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'addnewcontact',component:AddcontactComponent},
  {path:'updatecontact',component:UpdateComponent},
  {path:'deletecomponent',component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 