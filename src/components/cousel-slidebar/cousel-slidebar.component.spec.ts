import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouselSlidebarComponent } from './cousel-slidebar.component';

describe('CouselSlidebarComponent', () => {
  let component: CouselSlidebarComponent;
  let fixture: ComponentFixture<CouselSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouselSlidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouselSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
