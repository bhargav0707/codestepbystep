import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenofoundComponentComponent } from './pagenofound-component.component';

describe('PagenofoundComponentComponent', () => {
  let component: PagenofoundComponentComponent;
  let fixture: ComponentFixture<PagenofoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenofoundComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenofoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
