import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allUsers = [];
  signInObj = {
    username: '',
    email: '',
    password: '',
  };
  logInObj = {
    username: '',
    password: '',
  };

  ngOnInit() {
    const data = localStorage.getItem('signInUser');
    if (data) {
      this.allUsers = JSON.parse(data);
    }
  }

  signIn() {
    this.allUsers.push(this.signInObj);
    localStorage.setItem('signInUser', JSON.stringify(this.allUsers));
    this.signInObj = {
      username: '',
      email: '',
      password: '',
    }
  }

  logIn() {
    const userData = JSON.parse(localStorage.getItem('signInUser'));
    if (
      userData.some((data) => {
        return (
          data.username === this.logInObj.username &&
          data.password === this.logInObj.password
        );
      })
    ) {
      alert('login successful');
    } else {
      alert('user doesnt exist. Please signin');
    }
  }
}
