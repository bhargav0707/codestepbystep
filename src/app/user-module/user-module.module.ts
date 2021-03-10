import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { PagenofoundComponentComponent } from './pagenofound-component/pagenofound-component.component';


@NgModule({
  declarations: [AdminComponentComponent, UserComponentComponent, EmployeeComponentComponent, PagenofoundComponentComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
