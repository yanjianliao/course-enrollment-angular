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
    });
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

}
