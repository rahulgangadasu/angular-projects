import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap, throwError } from 'rxjs';

import { Place } from './place.model';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong fetching available places!',
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong fetching your favorites!',
    ).pipe(
      tap({
        next: (userPlaces) => {
          this.userPlaces.set(userPlaces);
        },
      }),
    );
  }

  addPlaceToUserPlaces(selectedPlace: Place) {
    const prevPlaces = this.userPlaces();

    if (!prevPlaces.some((place) => place.id === selectedPlace.id)) {
      this.userPlaces.set([...prevPlaces, selectedPlace]);
    }

    return this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id,
      })
      .pipe(
        catchError((error) => {
          this.userPlaces.set(prevPlaces);
          this.errorService.showError('Failed to add place to favorites!');
          return throwError(() => new Error('Failed to add place to favorites!'));
        }),
      );
  }

  removeUserPlace(selectedPlace: Place) {
    const prevPlaces = this.userPlaces();

    if (prevPlaces.some((place) => place.id === selectedPlace.id)) {
      this.userPlaces.set(prevPlaces.filter((place) => place.id !== selectedPlace.id));
    }

    return this.httpClient.delete(`http://localhost:3000/user-places/${selectedPlace.id}`).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError('Failed to remove place from favorites!');
        return throwError(() => new Error('Failed to remove place from favorites!'));
      }),
    );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((responseData) => responseData.places),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(errorMessage));
      }),
    );
  }
}
