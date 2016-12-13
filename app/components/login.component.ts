import { Component } from '@angular/core';
import {Auth} from './service/auth.service';
import {Inject} from '@angular/core';
import { Http,Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  template: '<a class="btn btn-success" (click)="auth.login()">Log In</a><a class="btn btn-success" href="start" *ngIf="this.registered">ENTER TINYTASK</a><button class="btn btn-danger" (click)="testFunction()">Test your connection</button>',
	providers: [Auth],
  styleUrls: ['app/components/views/styles/login.css'],

   
})
export class LoginComponent  { 

	constructor(private auth: Auth,
	private http: Http) {
	}
	
	private registered = false;

	private testFunction(){
		let string = "Bearer ";
		let token = localStorage.getItem('id_token');
		console.log(token);
		string = string + token;
		console.log(string);
		let headers = new Headers({ 'Authorization': string });
		let options = new RequestOptions({ headers: headers });
		console.log(headers);
		 let result = this.http.get("https://tinytaskrest.herokuapp.com/", options)
		 .subscribe( data  => {console.log(data); this.registered = true;this.initenter(data);},
					 error =>  console.log("erorro"));
	}
	
	private initenter(data: any){
		//console.log("blabbalal");
		//console.log(data);
		//this.registered = true;
	}
	
	
	
 }
