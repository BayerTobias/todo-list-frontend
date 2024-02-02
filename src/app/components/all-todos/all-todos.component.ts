import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss'],
})
export class AllTodosComponent {
  allTodos: any = [];

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.allTodos = await this.authService.getAllTodos();

    console.log(this.allTodos);
  }
}
