import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';   // 👈 for @if, @for, etc
import { FormsModule } from '@angular/forms';     // 👈 for [(ngModel)]

@Component({
  selector: 'app-root',
  standalone: true,   // 👈 standalone confirm
  imports: [CommonModule, FormsModule],  // 👈 Required imports
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-app1');

  display = true;
  x = 20;
  color = 'blue';

  fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

  HandleColor(val: string) {
    this.color = val;
  }

  // Signal banana
  counter = signal(0);

  // Signal update karne ke liye methods
  increment() {
    this.counter.update(value => value + 1);
  }

  decrement() {
    this.counter.update(value => value - 1);
  }

  reset() {
    this.counter.set(0);
  }

  // Two way binding ke liye properties
  username: string = '';





  task="";
tasklist:{id:number,task:string}[]=[]
 addtask(){
  this.tasklist.push({id:this.tasklist.length+1,task:this.task})
  console.log(this.tasklist)
 }

Deletetask(taskid:number){
  this.tasklist=this.tasklist.filter((item)=>taskid !=taskid);

}

isActive = false;
 boxColor: string = 'lightgray';

  // Method to change color on button click
  changeColor(color: string) {
    this.boxColor = color;
  }
}
