import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  passwordVisible = false;
  password: string = '';

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    let passwordInput = document.getElementById('Password') as HTMLInputElement;
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }

  onLogin(form: NgForm) {
    this.isLoading = true;
    this.data.login(form).subscribe(
      (response) => {
        if (response.success) {
          // console.log(form, response);
        this.isLoading = false;
        // Store token in localStorage
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/admin/dashboard']); // Redirect to admin page after successful login
        } else {
          this.isLoading = false;
          this.errorMessage = 'Invalid email or password';
        }
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Server error.';
      }
    );
  }

}
