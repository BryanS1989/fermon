import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFlipComponent } from './banner-flip.component';

describe('BannerFlipComponent', () => {
  let component: BannerFlipComponent;
  let fixture: ComponentFixture<BannerFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
