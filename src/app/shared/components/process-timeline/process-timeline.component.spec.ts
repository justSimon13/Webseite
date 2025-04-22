import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTimelineComponent } from './process-timeline.component';

describe('ProcessTimelineComponent', () => {
  let component: ProcessTimelineComponent;
  let fixture: ComponentFixture<ProcessTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
