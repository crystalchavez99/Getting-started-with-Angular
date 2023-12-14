// --standalone to make a standalone component (new ang component style reduce complexity and add feature )
// --inline-template results in less files for us to manage
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city name">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- The quotes inside the ngFor is template syntax creates template var to rep entry of iteration now we have to pass data to the componentn-->
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList:HousingLocation[] = [];
  /* dependency inject allows components and other parts of
  code to ask framework for things needed to work  also known
  as dependencies
  Allows us to have testable code
  */
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
