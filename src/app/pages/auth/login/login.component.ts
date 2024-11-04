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
  email: string = ''; // Added email property
  password: string = ''; // Added password property
  rememberMe: boolean = false; // Added rememberMe property
  passwordVisible: boolean = false;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onLogin(form: NgForm) {
    console.log(form.value);
    
    this.isLoading = true;
    this.data.login(form).subscribe(
      (response) => {
        if (response.success) {
        this.isLoading = false;
        // Store token in localStorage
        localStorage.setItem('token', response.data?.token);
        this.router.navigate(['/admin/dashboard']); // Redirect to admin page after successful login
        } else {
          this.isLoading = false;
        }
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

}
