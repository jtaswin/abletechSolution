import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {

  title = 'Solution';

  list = [];

  ngOnInit(): void {
    this.getCalcul();
  }

  getCalcul() {
  
  for (var i = 1; i <= 100; i++) {

    if (i % ( 3 * 5 ) === 0 ) {
      this.list.push("FizzBuzz");
    }
    else if ( i % 3 === 0 ) {
      this.list.push("Fizz");
    } 
    else if ( i % 5 === 0 ) {
      this.list.push("Buzz");
    }
    else if ( i !== 0 ) {
      this.list.push(i);
      continue
    }
    
   
  }}

  constructor() { }

}
