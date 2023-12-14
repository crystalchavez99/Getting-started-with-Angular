import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
// reactive forms gives us acceot to form template feature
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// update the code to get access to url parameter
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units Available: {{housingLocation?.availableUnits}}</li>
          <li>Does this unit have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="listing-apply">Apply now to live here</h2>
        <!-- Form element, add formGroup attribute and bind to applyForm
        Add labels and inputs with formControlName attribute set value
        based on form acceptance.
        Form is bound to data

        Event binding, submit is an event, we use parenthesesis as the syntax

      -->
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">
          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email">
          <button type="submit" class="primary">Apply Now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // add property class of route with activeated route
  // its a reference to current route we are match
  // now we can get access to vital route info
  //
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  // form group represents a collection of form controls that make up a form
  applyForm = new FormGroup({
    // form control accepts a default value
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation =>{
      this.housingLocation = housingLocation;
    }))
  }

  submitApplication(){
    // to access values from form group we use value property and access property
    // ?? knowledge coalescing operator (like ternary)
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
  }
}
