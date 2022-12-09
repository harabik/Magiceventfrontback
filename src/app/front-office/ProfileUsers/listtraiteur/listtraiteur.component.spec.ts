import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtraiteurComponent } from './listtraiteur.component';

describe('ListtraiteurComponent', () => {
  let component: ListtraiteurComponent;
  let fixture: ComponentFixture<ListtraiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtraiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtraiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
