import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: String = '';
  password: String = '';

  constructor() {}

  async loginWithUsernameAndPassword() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      username: this.username,
      password: 'Test123',
    });

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      const resp = await fetch('http://127.0.0.1:8000/login/', requestOptions);
      const json = await resp.json();
      localStorage.setItem('token', json.token);
      console.log('Token set:', json.token);
    } catch (err) {
      console.error(err);
    }
  }
}
