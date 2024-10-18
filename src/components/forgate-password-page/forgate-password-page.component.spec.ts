import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgatePasswordPageComponent } from './forgate-password-page.component';

describe('ForgatePasswordPageComponent', () => {
  let component: ForgatePasswordPageComponent;
  let fixture: ComponentFixture<ForgatePasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgatePasswordPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgatePasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
