import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet,RouterLink],
  templateUrl: './app.html',
})
export class App implements OnInit {
  users: any[] = [];
selectedUser: any = {};
  constructor(private userService: UserService) {}

  ngOnInit() {
    // Component load hote hi API se data le aayega
    this.userService.getUsers().subscribe((data) => {
      console.log('API Data:', data);
      this.users = data;
    });
  }

  adduser(formValue: any) {
    console.log('Form data:', formValue);

    this.userService.addUser(formValue).subscribe((res) => {
      console.log('User Added:', res);
      this.users.push(res); // API response ko list me dikhana
    });
  }
deleteUser(id: string) {
  console.log('Deleting User with ID:', id);

  this.userService.deleteUser(id).subscribe((res) => {
    console.log('User Deleted:', res);
    this.users = this.users.filter((u) => u.id !== id);
  });
}
selectUser(id: string) {
  console.log('user with ID for update:', id);

  this.userService.getselectuser(id).subscribe((res) => {
    console.log('User selected for update:', res);
    this.selectedUser = { ...res };
  });
}
updateUser(){this.userService.updateUser('1', { name: 'Updated Name', email: 'test@test.com' })
  .subscribe(response => {
    console.log('User updated:', response);
  });
}

}

