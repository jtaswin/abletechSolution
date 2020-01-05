import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Solution';

  list = [];

  ngOnInit(): void {
    this.getCalcul();
  }

  getCalcul() {
  
  for (var i = 1; i <= 100; i++) {
    
    if (i % (3 * 5) === 0 && i !== 0) {
      this.list.push("FizzBuzz");
    } 
    else if (i % 3 === 0 && i !== 0) {
      this.list.push("Fizz");
    } 
    else if (i % 5 === 0 && i !== 0) {
      this.list.push("Buzz");
    }
    else {
      this.list.push(i);
    }
  }}

  constructor() { }
}