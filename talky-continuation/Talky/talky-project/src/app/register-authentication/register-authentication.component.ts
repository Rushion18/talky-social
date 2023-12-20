// register-authentication.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register-authentication',
  templateUrl: './register-authentication.component.html',
  styleUrls: ['./register-authentication.component.css']
})
export class RegisterAuthenticationComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      const registeredUser = this.registerForm.value;
      this.registerService.registerUser(registeredUser).subscribe(
        () => {
          console.log('registred success');
          
          // Registration successful, navigate to login page or any other page
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed:', error);
          // Handle registration failure (e.g., show an error message)
        }
      );
    }
  }
}
