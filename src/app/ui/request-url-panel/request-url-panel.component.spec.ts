import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUrlPanelComponent } from './request-url-panel.component';

describe('RequestUrlPanelComponent', () => {
  let component: RequestUrlPanelComponent;
  let fixture: ComponentFixture<RequestUrlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestUrlPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestUrlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
