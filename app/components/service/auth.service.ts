// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { AuthHttp,tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

//let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('Bp4PPmbo5IXZumI4wrZ2Asi7mJgG9Dk3', 'tinytask.eu.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);
	  console.log("Authresult0");
	  console.log(authResult);
	  console.log(authResult.idTokenPayload.sub);
	  localStorage.setItem('user_id',authResult.idTokenPayload.sub);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
	localStorage.removeItem('user_id');
  };
  
 
  
}
