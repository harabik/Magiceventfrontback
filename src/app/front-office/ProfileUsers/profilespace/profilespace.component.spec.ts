import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilespaceComponent } from './profilespace.component';

describe('ProfilespaceComponent', () => {
  let component: ProfilespaceComponent;
  let fixture: ComponentFixture<ProfilespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilespaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
