import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

alert:boolean=false;

  entryForm = new FormGroup({
    employee_name: new FormControl(''),
    employee_salary: new FormControl(''),
    employee_age: new FormControl(''),
    profile_image: new FormControl('')
  })
  constructor(private emp: EmployeeServiceService) { }

  ngOnInit(): void {
  }
 collectData()
 {
   this.emp.saveEmployee(this.entryForm.value).subscribe((result)=>{
     console.warn(result);
   })
   this.alert=true;
   this.entryForm.reset({});
 }
 closeAlert(){
this.alert = false;
 }
}
