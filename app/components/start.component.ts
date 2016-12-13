import {Auth} from './service/auth.service';
import {Inject} from '@angular/core';
import { Http,Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';import { Component } from '@angular/core';

import {RestService} from "./service/restService";

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/views/start.html',
  providers: [Auth, RestService],
  styleUrls: ['app/components/views/styles/login.css']
})
export class StartComponent  { 
	constructor(private auth:Auth, private rest:RestService){
		this.checkForLogin();
		//this.loadTasks();
	}
	
	private tasks:any;
	
	private checkForLogin(){
		console.log("Checking for a valid login...");
		if(!localStorage.getItem("id_token"))
			window.location.href = "";
	}
	
	private loadTasks(){
		let string = "Bearer ";
		let token = localStorage.getItem('id_token');
		console.log(token);
		string = string + token;
		console.log(string);
		this.rest.authorizationHeader(string);
		this.rest.getAllTasks()
		.subscribe((data:any) =>{console.log(data); this.tasks = data;});
	}
	
 }
