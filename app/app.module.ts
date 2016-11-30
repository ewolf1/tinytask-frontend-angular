import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule}   from '@angular/router';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent }  from './app.component';
import {RegisterComponent} from './components/register.component';
import {ProfileComponent} from './components/profile.component';
import {StartComponent} from './components/start.component';
import {LoginComponent} from './components/login.component';
import {SearchComponent} from './components/search.component';
import {MapComponent} from './components/map.component';
import {CreateTaskComponent} from './components/createtask.component';

@NgModule({
  imports:      [ BrowserModule,
FormsModule,
    RouterModule.forRoot([
      {
        path: '',
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
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
