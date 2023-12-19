import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPlatformComponent } from './posts-platform.component';

describe('PostsPlatformComponent', () => {
  let component: PostsPlatformComponent;
  let fixture: ComponentFixture<PostsPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsPlatformComponent]
    });
    fixture = TestBed.createComponent(PostsPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
