import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAuthenticationComponent } from './register-authentication.component';

describe('RegisterAuthenticationComponent', () => {
  let component: RegisterAuthenticationComponent;
  let fixture: ComponentFixture<RegisterAuthenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAuthenticationComponent]
    });
    fixture = TestBed.createComponent(RegisterAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
