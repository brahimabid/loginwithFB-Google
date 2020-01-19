import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffEmploiComponent } from './off-emploi.component';

describe('OffEmploiComponent', () => {
  let component: OffEmploiComponent;
  let fixture: ComponentFixture<OffEmploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffEmploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
