import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img [src]="housingLocation?.photo" alt="A photo of {{housingLocation?.name}}" class="listing-photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Available Features</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Wifi: {{housingLocation?.wifi}}</li>
          <li>Laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Book Now and Start Living</h2>
        <button type="button" class="primary">Apply Now</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation:HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number (this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
