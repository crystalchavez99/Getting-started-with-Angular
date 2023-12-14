import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

// need to be available to files that import our routes
// a new entry is a object literal to rep a route
// path represents  url matches which component
// component for component to render on path
// title for each component
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    }
];

export default routeConfig;
