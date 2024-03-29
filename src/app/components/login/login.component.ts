import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      const resp: any = await this.authService.loginWithUsernameAndPassword(
        this.username,
        this.password
      );

      localStorage.setItem('token', resp['token']);
      console.log(resp);
      this.router.navigateByUrl('/todos');
    } catch (err) {
      console.error(err);
    }
  }
}
