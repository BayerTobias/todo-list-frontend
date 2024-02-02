import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async loginWithUsernameAndPassword(username: string, password: string) {
    const url = environment.baseUrl + '/login/';
    const body = { username: username, password: password };

    return lastValueFrom(this.http.post(url, body));
  }

  async getAllTodos() {
    const url = environment.baseUrl + '/todos/';
    let headers = new HttpHeaders();
    headers = headers.set(
      'Authorization',
      'Token ' + localStorage.getItem('token')
    );

    return lastValueFrom(this.http.get(url, { headers: headers }));
  }
}
