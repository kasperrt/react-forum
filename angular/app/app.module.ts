import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing } 		  from  './app.routing';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent }	  from './components/home/home.component';
import { AppComponent }   from './app.component';
import { ROUTER_DIRECTIVES } from '@angular/router';



/*	Imports:  list of external modules we import
	Declarations: list of modules we use internally.
	Bootstrap: Declare what to start when the module starts. In this case, just the app component. 
	Directives: Used for changing the content of views. We only use ROUTER_DIRECTIVES for this. 

 */
@NgModule({
    imports: [BrowserModule,routing], 
    declarations: [AppComponent,ProfileComponent, HomeComponent],
    bootstrap: [AppComponent], 
    directives:[ROUTER_DIRECTIVES]
})
export class AppModule { 
}
