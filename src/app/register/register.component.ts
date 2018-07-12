import { Component, OnInit } from '@angular/core';
import UserServiceClient from '../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private router: Router) { }

  username: String;
  password: String;
  password2: String;

  createUser() {

    if (this.password !== this.password2) {
      alert('Two passwords should be same');
      return;
    }

    this.userService.createUser(this.username, this.password)
      .then(user => this.router.navigate(['profile']));

  }

  ngOnInit() {
  }

}
