import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';     // 👈 for [(ngModel)]
import { ReactiveFormsModule } from '@angular/forms';
import { User } from './user/user';
import { CommonModule, CurrencyPipe } from '@angular/common'; 
import { LoginComponent } from './login/login';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
   ReactiveFormsModule,
   User,
 CommonModule,
 LoginComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-app1');

 name = new FormControl('');
  password = new FormControl('');
 Login() {
    console.log("Name:", this.name.value);
    console.log("Password:", this.password.value);
  }
//grouping 
 profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  // Submit function
  Submit() {
    console.log(this.profileForm.value);
  }

  addDetail(val:NgForm){
    console.log(val);
  }
//Tuseday


users: string[] = ['anil', 'peter', 'sam'];

//thursday
Title='Code step by srep';
name1='Fizzah irshad';
 today = new Date();

 
}
