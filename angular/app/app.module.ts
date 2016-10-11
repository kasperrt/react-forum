import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing } 		  from  './app.routing';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent }	  from './components/home/home.component';
import { AppComponent }   from './app.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@NgModule({
    imports: [BrowserModule,routing], 
    declarations: [AppComponent,ProfileComponent, HomeComponent],
    bootstrap: [AppComponent], 
    directives:[ROUTER_DIRECTIVES]
})
export class AppModule { 
}
