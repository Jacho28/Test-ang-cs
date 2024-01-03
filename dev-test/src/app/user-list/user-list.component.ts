import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserComponent, HttpClientModule],
  template: `
  <app-user *ngFor="let user of userList" [user]="user"></app-user>
  `,
  styleUrl: './user-list.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UserListComponent implements OnInit{
  userList: User[] = [];
  //userService: UserService = inject(UserService);
  httpClient = inject(HttpClient);


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers(): void {
    this.httpClient.get('http://localhost:5241/api/users/').subscribe(
      {
        next:(dataResponse: any) => {
          console.log(dataResponse)
          this.userList = dataResponse;
        },
        error:(e) => {console.log(e)}
      }
    );
  }

  // showList(): void {
  //   this.userService.getUsers().subscribe(
  //     {
  //       next:(dataResponse) => {
  //         console.log(dataResponse)
  //         this.userList = dataResponse;
  //       },
  //       error:(e) => {console.log(e)}
  //     }
  //   );
  // }

}
