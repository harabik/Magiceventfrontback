import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListespaceComponent } from './listespace.component';

describe('ListespaceComponent', () => {
  let component: ListespaceComponent;
  let fixture: ComponentFixture<ListespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListespaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
