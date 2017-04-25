import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificatifsComponent } from './justificatifs.component';

describe('JustificatifsComponent', () => {
  let component: JustificatifsComponent;
  let fixture: ComponentFixture<JustificatifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustificatifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificatifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
