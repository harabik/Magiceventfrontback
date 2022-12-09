import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilphotographeComponent } from './profilphotographe.component';

describe('ProfilphotographeComponent', () => {
  let component: ProfilphotographeComponent;
  let fixture: ComponentFixture<ProfilphotographeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilphotographeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilphotographeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
