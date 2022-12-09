import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfillocationComponent } from './profillocation.component';

describe('ProfillocationComponent', () => {
  let component: ProfillocationComponent;
  let fixture: ComponentFixture<ProfillocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfillocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfillocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
