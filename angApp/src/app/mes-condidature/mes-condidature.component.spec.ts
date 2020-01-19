import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCondidatureComponent } from './mes-condidature.component';

describe('MesCondidatureComponent', () => {
  let component: MesCondidatureComponent;
  let fixture: ComponentFixture<MesCondidatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesCondidatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesCondidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
