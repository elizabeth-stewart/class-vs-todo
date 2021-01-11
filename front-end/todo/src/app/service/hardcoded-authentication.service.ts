import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('before: ' + this.isUserLoggedIn());

    if (username === 'templeton' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);

      // console.log('after: ' + this.isUserLoggedIn());

      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');

    return !(user === null);
  } 
}
