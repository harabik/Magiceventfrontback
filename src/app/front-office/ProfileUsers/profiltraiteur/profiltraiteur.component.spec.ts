import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiltraiteurComponent } from './profiltraiteur.component';

describe('ProfiltraiteurComponent', () => {
  let component: ProfiltraiteurComponent;
  let fixture: ComponentFixture<ProfiltraiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiltraiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiltraiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
