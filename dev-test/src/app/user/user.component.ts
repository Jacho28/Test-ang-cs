import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <h2>{{ user.id }}. {{ user.name }}</h2>
      <p>{{ user.email}}</p>
    </section>
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;
}
