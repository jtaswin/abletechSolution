import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyBINM--kvOVBoBeIUbrkwurOE3uP9pG5kk",
      authDomain: "abletechsolution-cde50.firebaseapp.com",
      databaseURL: "https://abletechsolution-cde50.firebaseio.com",
      projectId: "abletechsolution-cde50",
      storageBucket: "abletechsolution-cde50.appspot.com",
      messagingSenderId: "1054141203578",
      appId: "1:1054141203578:web:e6b3d020bfe7a848e027c3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  }
}