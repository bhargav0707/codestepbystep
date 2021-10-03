import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { from } from 'rxjs';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyModalComponent } from './my-modal/my-modal.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    EmployeesListComponent,
    DeleteEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyModalComponent]
})
export class AppModule { }
