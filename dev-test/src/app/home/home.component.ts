import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    UserListComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by name">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-user-list></app-user-list>
  </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
