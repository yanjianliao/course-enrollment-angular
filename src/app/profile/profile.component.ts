import { Component, OnInit } from '@angular/core';
import UserServiceClient from '../services/user.service.client';
import {Router} from '@angular/router';
import SectionServiceClient from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = {username: '', password: ''};
  sections = [];

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.userService
      .profile()
      .then(user => {
        this.user = user;
      });
    this.sectionService
      .findSectionForStudent()
      .then(sections => this.sections = sections);

  }

  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['login']));
  }

}
