import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaSmallComponent } from './cta-small.component';

describe('CtaSmallComponent', () => {
  let component: CtaSmallComponent;
  let fixture: ComponentFixture<CtaSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
