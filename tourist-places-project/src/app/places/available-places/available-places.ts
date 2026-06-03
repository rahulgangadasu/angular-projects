import { Component, signal } from '@angular/core';
import { Place } from '../place.model';
import { Places } from '../places';
import { PlacesContainer } from '../places-container/places-container';

@Component({
  selector: 'app-available-places',
  imports: [Places, PlacesContainer],
  templateUrl: './available-places.html',
  styleUrl: './available-places.css',
})
export class AvailablePlaces {
  places = signal<Place[] | undefined>(undefined);
}
