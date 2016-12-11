import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule}   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';



import { AppComponent }  from './app.component';
import {RegisterComponent} from './components/register.component';
import {ProfileComponent} from './components/profile.component';
import {StartComponent} from './components/start.component';
import {LoginComponent} from './components/login.component';
import {SearchComponent} from './components/search.component';
import {MapComponent} from './components/map.component';
import {CreateTaskComponent} from './components/createtask.component';

import {Auth} from './components/service/auth.service';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

import {RestService} from './components/service/restService';

@NgModule({
  imports:      [ BrowserModule,
FormsModule,
 HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
	  {
        path: 'login',
        component: LoginComponent
      },
	  {path: 'register', component: RegisterComponent},
	  {path: 'profile', component: ProfileComponent},
		  {path: 'start', component: StartComponent},
			  {path: 'search', component: SearchComponent},
				  {path: 'map', component: MapComponent},
					  {path: 'createtask', component: CreateTaskComponent}
    ])
  ],
  declarations: [ AppComponent,
RegisterComponent,
ProfileComponent,
StartComponent,
LoginComponent,
SearchComponent,
MapComponent,
CreateTaskComponent
  ],
  providers: [AUTH_PROVIDERS],
  
  bootstrap:    [ AppComponent]
})
export class AppModule { }
