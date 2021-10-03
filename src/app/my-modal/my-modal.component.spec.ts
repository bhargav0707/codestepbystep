import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MyModalComponent } from './my-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyModalComponent', () => {
  let component: MyModalComponent;
  let fixture: ComponentFixture<MyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyModalComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
