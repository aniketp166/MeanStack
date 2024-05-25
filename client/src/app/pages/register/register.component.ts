import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { confirmPasswordValidator } from '../../../app/validators/confirm-password.validator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export default class RegisterComponent implements OnInit {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        userName: ['', Validators.required],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: confirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }

  register() {
    //console.log(this.registerForm.value);
    this.authService.registerService(this.registerForm.value).subscribe({
      next: (res) => {
        alert('userRegistered');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
