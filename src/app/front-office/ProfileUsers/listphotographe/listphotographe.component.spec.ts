import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListphotographeComponent } from './listphotographe.component';

describe('ListphotographeComponent', () => {
  let component: ListphotographeComponent;
  let fixture: ComponentFixture<ListphotographeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListphotographeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListphotographeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
