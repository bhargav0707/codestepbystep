import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { PagenofoundComponentComponent } from './pagenofound-component/pagenofound-component.component';

const routes: Routes = [
  {
    path:"Admin", children:[
      {
        path: "admincomp", component:AdminComponentComponent
      },
      {
        path: "employeecomp", component: EmployeeComponentComponent
      },
      {
        path: "usercomp", component: UserComponentComponent
      },
      {
        path: "**", component: PagenofoundComponentComponent
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
