import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListComponent } from './employees-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

describe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesListComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {} },
      { provide: MatDialog, useValue: {} }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
