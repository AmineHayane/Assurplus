import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngsemComponent } from './testngsem.component';

describe('TestngsemComponent', () => {
  let component: TestngsemComponent;
  let fixture: ComponentFixture<TestngsemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestngsemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestngsemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
