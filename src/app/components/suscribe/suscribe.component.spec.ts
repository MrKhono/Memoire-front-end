import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscribeComponent } from './suscribe.component';

describe('SuscribeComponent', () => {
  let component: SuscribeComponent;
  let fixture: ComponentFixture<SuscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuscribeComponent]
    });
    fixture = TestBed.createComponent(SuscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
