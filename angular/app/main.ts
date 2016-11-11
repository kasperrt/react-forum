import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; /*Lets us use Angular in our web app*/
import { AppModule } from './app.module'; /*Here, we connect AppModule which loads the entire app*/
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule); /*Launches the application*/
