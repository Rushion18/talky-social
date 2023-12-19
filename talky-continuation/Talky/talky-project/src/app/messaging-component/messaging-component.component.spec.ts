import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingComponentComponent } from './messaging-component.component';

describe('MessagingComponentComponent', () => {
  let component: MessagingComponentComponent;
  let fixture: ComponentFixture<MessagingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagingComponentComponent]
    });
    fixture = TestBed.createComponent(MessagingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
