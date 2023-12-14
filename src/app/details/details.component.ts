import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// update the code to get access to url parameter
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{housingLocationId}}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // add property class of route with activeated route
  // its a reference to current route we are match
  // now we can get access to vital route info
  //
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = 0;

  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params["id"])
  }
}
