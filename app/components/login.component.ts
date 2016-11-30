import { Component } from '@angular/core';
import {Auth} from './service/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/views/login.html',
  styleUrls: ['app/components/views/styles/login.css']
})
export class LoginComponent  { 
	constructor(private auth: Auth) {}
 }
