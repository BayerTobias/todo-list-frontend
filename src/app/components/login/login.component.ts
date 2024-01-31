import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: String = '';
  password: String = '';

  constructor() {}

  async login() {
    // login code
  }
}
