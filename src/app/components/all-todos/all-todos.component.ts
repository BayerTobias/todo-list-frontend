import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss'],
})
export class AllTodosComponent {
  allTodos: any = [];

  title: string = '';

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    try {
      this.allTodos = await this.authService.getAllTodos();
      console.log(this.allTodos);
    } catch (err) {
      console.error(err);
    }
  }

  async createTodo() {
    if (this.title) {
      try {
        const resp = await this.authService.createTodo(this.title);
        console.log(resp);
      } catch (err) {
        console.error(err);
      }
    }
  }

  async deleteTodo(id: number) {
    try {
      const resp = await this.authService.deleteTodo(id);
      console.log(resp);
    } catch (err) {
      console.error(err);
    }
  }
}
