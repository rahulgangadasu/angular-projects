import { Component, DestroyRef, inject, signal } from '@angular/core';

import { Places } from '../places';
import { PlacesService } from '../places.service';
import { PlacesContainer } from '../places-container/places-container';
import { Place } from '../place.model';

@Component({
  selector: 'app-user-places',
  imports: [PlacesContainer, Places],
  templateUrl: './user-places.html',
  styleUrl: './user-places.css',
})
export class UserPlaces {
  private destroyRef = inject(DestroyRef);
  private placesService = inject(PlacesService);

  isFetching = signal(false);
  error = signal('');
  places = this.placesService.loadedUserPlaces;

  ngOnInit() {
    this.isFetching.set(true);

    const subscription = this.placesService.loadUserPlaces().subscribe({
      complete: () => {
        this.isFetching.set(false);
      },
      error: (err: Error) => {
        this.error.set(err.message);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      console.log('user places component destroyed');
    });
  }

  onRemovePlace(selectedPlace: Place) {
    const subscription = this.placesService.removeUserPlace(selectedPlace).subscribe();

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      console.log('user places component destroyed');
    });
  }
}
