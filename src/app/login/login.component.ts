import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { Login } from '../interface/login';  
import { AuthService } from '../services/auth.service'
import { FormBuilder, FormGroup, Validator } from '@angular/forms' ; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {

  }
}
