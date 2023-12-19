import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsChatComponent } from './texts-chat.component';

describe('TextsChatComponent', () => {
  let component: TextsChatComponent;
  let fixture: ComponentFixture<TextsChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextsChatComponent]
    });
    fixture = TestBed.createComponent(TextsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
