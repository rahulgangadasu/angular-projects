import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Place } from '../place.model';
import { Places } from '../places';
import { PlacesContainer } from '../places-container/places-container';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  imports: [Places, PlacesContainer],
  templateUrl: './available-places.html',
  styleUrl: './available-places.css',
})
export class AvailablePlaces implements OnInit {
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  // constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.isFetching.set(true);

    const subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places') //,{observe: 'response',//observe: 'events',}
      .pipe(
        map((responseData) => responseData.places),
        catchError((error) => {
          console.log(error);
          return throwError(() => new Error('Something went wrong!'));
        }),
      )
      .subscribe({
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
    });
  }
  onSelectPlace(selectedPlace: Place) {
    this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id,
        title: selectedPlace.title,
      })
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
