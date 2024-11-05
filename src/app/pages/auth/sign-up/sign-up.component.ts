import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { fadeIn, rotateIn, slideInLeft, slideInUp, zoomIn } from '../../../services/animations';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  animations: [fadeIn, slideInUp, slideInLeft, zoomIn, rotateIn],
})
export class SignUpComponent {
  isLoading: boolean = false;
  email: string = '';
  fullName: string = '';
  userName: string = '';
  password: string = '';
  rememberMe: boolean = false;
  passwordVisible: boolean = false;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

}
