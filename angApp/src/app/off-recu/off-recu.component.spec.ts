import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffRecuComponent } from './off-recu.component';

describe('OffRecuComponent', () => {
  let component: OffRecuComponent;
  let fixture: ComponentFixture<OffRecuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffRecuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
