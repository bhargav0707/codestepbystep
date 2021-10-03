import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  alert = false;

  entryForm = new FormGroup({
    employee_name: new FormControl('', Validators.required),
    employee_salary: new FormControl('', Validators.required),
    employee_age: new FormControl('', Validators.required),
    profile_image: new FormControl('')
  })
  constructor(private emp: EmployeeServiceService) { }

  ngOnInit(): void {
  }

  get registerFormControl() {
    return this.entryForm.controls;
  }

  collectData() {
    this.emp.saveEmployee(this.entryForm.value).subscribe((result) => {
      console.warn(result);
    })
    this.alert = true;
    this.entryForm.reset();
  }

  closeAlert() {
    this.alert = false;
  }
}
