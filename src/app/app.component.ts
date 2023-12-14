// app.component.ts contains html template code to display
// dev ng serve refreshes auto
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
// Adds directives and providers for in-app navigation
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <a routerLink=""><img class="brand-logo" src="/assets/logo.svg" alt = "logo" aria-hidden="true"></a>
    </header>
    <section class="content">
      <!-- components use the app- prefix;
        text-editor will give error, because main app needs to know about new home components;
        can be fixed by adding new prop to component decorator metadata called imports;
        imports lets us list the dependencies for the component

        Router Outler: Acts as a placeholder that Angular dynamically fills based on the current router state.
    -->
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
  // routermodule can allow us to use features of router in the app.ts
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
