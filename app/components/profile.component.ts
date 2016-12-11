import {RestService} from "./service/restService";
import {Auth} from './service/auth.service';
import {Inject} from '@angular/core';
import { Http,Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import { Component } from '@angular/core';

import {User} from "./class/user";

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/views/profile.html',
  providers: [Auth, RestService],
  styleUrls: ['app/components/views/styles/login.css']
})
export class ProfileComponent  { 
	constructor(private auth:Auth, 
	private rest:RestService, 
	private http:Http){
		this.checkForLogin();
		this.getUser();
	}
	
	private checkForLogin(){
		console.log("Checking for a valid login...");
		if(!localStorage.getItem("id_token"))
			window.location.href = "";
	}
	
	private getUser(){
		let string = "Bearer ";
		let token = localStorage.getItem('id_token');
		console.log(token);
		string = string + token;
		console.log(string);
		this.rest.authorizationHeader(string);
		let result = this.rest.getUserSingle(token);
		
		console.log("RESULT INC");
		console.log(result);
		/*let string = "Bearer ";
		let token = localStorage.getItem('id_token');
		console.log(token);
		string = string + token;
		console.log(string);
		let headers = new Headers({ 'Authorization': string });
		let options = new RequestOptions({ headers: headers });
		console.log(headers);
		let result = this.http.get("https://tinytaskrest.herokuapp.com/", options)
		 .subscribe( data  => {console.log(data); this.registered = true;this.initenter(data);},
					 error =>  console.log("erorro"));*/
	}
	
 }
