import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilserveurComponent } from './profilserveur.component';

describe('ProfilserveurComponent', () => {
  let component: ProfilserveurComponent;
  let fixture: ComponentFixture<ProfilserveurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilserveurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilserveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
