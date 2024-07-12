import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { Login } from '../interface/login';  
import { AuthService } from '../services/auth.service'
import { FormBuilder, FormGroup, Validator } from '@angular/forms' ; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {

  }
}
