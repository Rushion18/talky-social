import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsContentComponent } from './notifications-content.component';

describe('NotificationsContentComponent', () => {
  let component: NotificationsContentComponent;
  let fixture: ComponentFixture<NotificationsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsContentComponent]
    });
    fixture = TestBed.createComponent(NotificationsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
