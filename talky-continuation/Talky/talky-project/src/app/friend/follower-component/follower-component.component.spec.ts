import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerComponentComponent } from './follower-component.component';

describe('FollowerComponentComponent', () => {
  let component: FollowerComponentComponent;
  let fixture: ComponentFixture<FollowerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowerComponentComponent]
    });
    fixture = TestBed.createComponent(FollowerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
