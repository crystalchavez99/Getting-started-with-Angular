// app.component.ts contains html template code to display
// dev ng serve refreshes auto
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Hello Universe!</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
