import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeComponent } from './delete-employee.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeleteEmployeeComponent', () => {
  let component: DeleteEmployeeComponent;
  let fixture: ComponentFixture<DeleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteEmployeeComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
