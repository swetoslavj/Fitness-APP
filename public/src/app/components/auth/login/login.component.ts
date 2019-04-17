import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }
  

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(4)] ]
    })
  }

  login() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password)
      .subscribe((data) => {
        localStorage.setItem('token', data['token']);
        localStorage.setItem('name', data['user'].name);
        this.router.navigate(['/home']);
      })
  }
}
