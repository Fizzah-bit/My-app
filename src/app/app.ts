import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   
})
export class App{
  protected readonly title = signal('my-app1');
  // Function sahi tarike se likhna
  // handleClickEvent(): void {
  //   alert("Function called");
  // }
  display=true
  x=20
  color='blue'
   fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  HandleColor(val:string){
    this.color=val
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



  
}
