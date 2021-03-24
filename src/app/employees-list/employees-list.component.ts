import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  listData:any = [];
  constructor(private employeeService :EmployeeServiceService ) { }

  ngOnInit(): void {
    this.employeeService.getList().subscribe((data)=>{
    this.listData = data;
    });
   }

   deleteEmp(item:any){
     this.listData.splice(item-1,1)
    this.employeeService.deleteEmployee(item).subscribe((result)=>{
    })
   }
}
