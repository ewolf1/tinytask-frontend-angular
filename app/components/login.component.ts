import { Component } from '@angular/core';
import {Auth} from './service/auth.service';
import {Inject} from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<a class="btn btn-success" (click)="auth.login()">Log In</a>',
	providers: [Auth],
  styleUrls: ['app/components/views/styles/login.css'],

   
})
export class LoginComponent  { 

	constructor(private auth: Auth) {}
	console.log(auth);
 }
