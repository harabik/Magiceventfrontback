import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListserveurComponent } from './listserveur.component';

describe('ListserveurComponent', () => {
  let component: ListserveurComponent;
  let fixture: ComponentFixture<ListserveurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListserveurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListserveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
