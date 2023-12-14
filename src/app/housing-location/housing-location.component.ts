import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
// Angular comps can receive data through a feature called input properties
// passing data in components with @Input properties
// Interface will be in use for our app, contract between us and data to expect the structure
// ng generate interface name
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!-- [] enable property binding tells values in quotes to be an actual property, {{}} is interpolation syntax-->
      <img class="listing-photo" [src]="housingLocation.photo" alt={{housingLocation.photo}}>
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
      <!-- For anchor element, we dont use href we use router link directive
      allows us to extend functionality of anchor element
    -->
      <a routerLink="details">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // exclamation point is non-null assertion tells tsc the val won't be null or undefined
  @Input() housingLocation!:HousingLocation;
}
