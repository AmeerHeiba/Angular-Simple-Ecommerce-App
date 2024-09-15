import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for API calls

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Import CommonModule and ReactiveFormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {} // Inject HttpClient

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.http.post<any>('http://localhost:3000/auth/login', loginData).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token); 
          console.log('Login successful, token stored');
        },
        error: (err) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      });
    }
  }
}
