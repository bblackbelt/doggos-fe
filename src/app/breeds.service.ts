import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Breed } from './breeds/Breed';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private breedsUrl = "http://localhost:9090/breeds"

  constructor(private httpClient: HttpClient) { }

  getBreeds():Observable<Breed[]>{
    return this.httpClient.get<Breed[]>(this.breedsUrl)
      .pipe(
        catchError(this.handleError<Breed[]>('getBreeds', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}