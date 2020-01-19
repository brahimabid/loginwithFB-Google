import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSocieteComponent } from './list-societe.component';

describe('ListSocieteComponent', () => {
  let component: ListSocieteComponent;
  let fixture: ComponentFixture<ListSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
