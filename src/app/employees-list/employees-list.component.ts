import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyModalComponent } from '../my-modal/my-modal.component';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  
  listData:any = [];
  constructor(private employeeService :EmployeeServiceService, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.employeeService.getList().subscribe((data)=>{
    this.listData = data;
    });
   }

   openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(res => {
    });
  }
  
   deleteEmp(item:any){
     this.listData.splice(item-1,1)
    this.employeeService.deleteEmployee(item).subscribe((result)=>{
    })
   }
}
