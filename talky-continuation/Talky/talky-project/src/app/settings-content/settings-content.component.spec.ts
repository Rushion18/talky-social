import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsContentComponent } from './settings-content.component';

describe('SettingsContentComponent', () => {
  let component: SettingsContentComponent;
  let fixture: ComponentFixture<SettingsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsContentComponent]
    });
    fixture = TestBed.createComponent(SettingsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
