import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  
  template: `
    <section>
      <form>
        <input type="text" name="" id="" placeholder="Filter by city">
        <button type="button" class="primary">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList:HousingLocation[] = [];
  housingLocationService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingLocationService.AllHousingLocation;
  }
}
