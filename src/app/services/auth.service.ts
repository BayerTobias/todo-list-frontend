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

  //Eigentlich in einen anderen Service oder direkt in komponente:

  async getAllTodos() {
    const url = environment.baseUrl + '/todos/';

    return lastValueFrom(this.http.get(url));
  }

  async createTodo(title: string) {
    const url = environment.baseUrl + '/todos/';
    const body = { title: title };

    return lastValueFrom(this.http.post(url, body));
  }

  deleteTodo(id: number) {
    const url = environment.baseUrl + '/todos/' + id + '/';

    return lastValueFrom(this.http.delete(url));
  }
}
