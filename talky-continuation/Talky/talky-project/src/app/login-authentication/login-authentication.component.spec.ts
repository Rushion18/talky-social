import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuthenticationComponent } from './login-authentication.component';

describe('LoginAuthenticationComponent', () => {
  let component: LoginAuthenticationComponent;
  let fixture: ComponentFixture<LoginAuthenticationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAuthenticationComponent]
    });
    fixture = TestBed.createComponent(LoginAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
