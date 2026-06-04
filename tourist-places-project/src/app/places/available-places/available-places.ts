import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { Places } from '../places';
import { PlacesContainer } from '../places-container/places-container';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  imports: [Places, PlacesContainer],
  templateUrl: './available-places.html',
  styleUrl: './available-places.css',
})
export class AvailablePlaces implements OnInit {
  private destroyRef = inject(DestroyRef);
  private placesService = inject(PlacesService);

  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  // constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.isFetching.set(true);

    const subscription = this.placesService.loadAvailablePlaces().subscribe({
      next: (places) => {
        this.places.set(places);
      },
      // next: (event) => {
      //   console.log(event);
      // },
      // next: (response) => {
      //   console.log(response.body?.places);
      // },
      complete: () => {
        this.isFetching.set(false);
      },
      error: (err: Error) => {
        this.error.set(err.message);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      console.log('available places component destroyed');
    });
  }

  onSelectPlace(selectedPlace: Place) {
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe({
      next: (responseData) => {
        console.log(responseData);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
