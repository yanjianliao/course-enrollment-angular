export default class UserServiceClient {

  USER_URL = 'http://localhost:3000/api';

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(this.USER_URL + '/user', {
      method: 'post',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  login(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(this.USER_URL + '/login', {
      method: 'post',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      return response.json();
    });
  }

  profile() {
    return fetch(this.USER_URL + '/profile', {
      credentials: 'include'
    }).then(response => response.json());
  }

  logout() {
    return fetch(this.USER_URL + '/logout', {
      credentials: 'include'
    });
  }

  updateProfile(user) {
    return fetch(this.USER_URL + '/profile', {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    });
  }

  deleteProfile(user) {
    console.log(this.USER_URL + '/profile');
    return fetch(this.USER_URL + '/profile', {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    });
  }

}
