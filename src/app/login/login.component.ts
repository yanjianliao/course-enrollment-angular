import { Component, OnInit } from '@angular/core';
import UserServiceClient from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    this.userService.login(username, password)
      .then(user => {
        if (user.error) {
          alert('Invalid password or username');
        } else {
          this.router.navigate(['profile']);
        }
      });
  }

}
