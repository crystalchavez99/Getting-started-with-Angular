// app.component.ts contains html template code to display
// dev ng serve refreshes auto
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt = "logo" aria-hidden="true">
    </header>
    <section class="content">
      <!-- components use the app- prefix;
        text-editor will give error, because main app needs to know about new home components;
        can be fixed by adding new prop to component decorator metadata called imports;
        imports lets us list the dependencies for the component
    -->
      <app-home></app-home>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
