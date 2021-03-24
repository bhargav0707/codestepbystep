import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
const routes: Routes = [
  {
    path:"addEmployee",component:AddEmployeeComponent
  },
  {
    path:"login",component:LoginFormComponent
  },
  {
    path:"update/:id",component:UpdateEmployeeComponent
  },
  {
    path:"register",component:RegistrationFormComponent
  },
  {
    path:"deleteEmployee",component:DeleteEmployeeComponent
  },
  {
    path:"employeeList",component:EmployeesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
