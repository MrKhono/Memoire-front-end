import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolProfilComponent } from './school-profil.component';

describe('SchoolProfilComponent', () => {
  let component: SchoolProfilComponent;
  let fixture: ComponentFixture<SchoolProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolProfilComponent]
    });
    fixture = TestBed.createComponent(SchoolProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
