import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// to enable routing import provideRouter
// it sets up the required functionality for app to support routing
import { provideRouter } from '@angular/router';
// to use new routes impor it to main, gives us access to property
import routeConfig from './app/routes';
bootstrapApplication(AppComponent,{
  // list of providers that should be available to root and its children
  providers: [
    // empty array represents app routes
    // routes define path link to components in app
    provideRouter(routeConfig)
  ]
})
  .catch(err => console.error(err));
