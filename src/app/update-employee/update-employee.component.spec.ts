import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeComponent } from './update-employee.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEmployeeComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
