import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent implements OnInit {
  alert:boolean=false;
  
  editForm = new FormGroup({
    employee_name: new FormControl(''),
    employee_salary: new FormControl(''),
    employee_age: new FormControl(''),
    profile_image: new FormControl('')
  })
  constructor(private router: ActivatedRoute, private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee(this.router.snapshot.params.id).
    subscribe((result: any) => {
      this.editForm.setValue({
        employee_name: result['employee_name'],
        employee_salary: result['employee_salary'],
        employee_age: result['employee_age'],
        profile_image: result['profile_image'],
      })
    })
  }

  updateData(){
    console.log(this.editForm.value);
   this.employeeService.updateEmployee(this.router.snapshot.params.id,this.editForm.value).subscribe((result)=>{
    console.log(result);
   })
   this.alert=true;
   this.editForm.reset({});
  }

  closeAlert(){
    this.alert = false;
     }
}
