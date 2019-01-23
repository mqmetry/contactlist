import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyservService } from './myserv.service';
import { HttpClientModule} from '@angular/common/http';
import { ContactsComponent } from './contacts/contacts.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
 import {  NgxPaginationModule } from 'ngx-pagination';
import { UpdateComponent } from './update/update.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DeleteComponent } from './delete/delete.component';
@NgModule({
  declarations: [ 
    AppComponent,
    ContactsComponent,
    AddcontactComponent,
    UpdateComponent,
    DeleteComponent 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InternationalPhoneNumberModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
  ],
  providers: [
    MyservService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
