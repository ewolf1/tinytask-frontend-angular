import {Auth} from './service/auth.service';
import {Inject} from '@angular/core';
import { Http,Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/views/start.html',
  providers: [Auth],
  styleUrls: ['app/components/views/styles/login.css']
})
export class StartComponent  { 
	constructor(private auth:Auth){
		this.checkForLogin();
	}
	
	private checkForLogin(){
		console.log("Checking for a valid login...");
		if(!localStorage.getItem("id_token"))
			window.location.href = "";
	}
 }
