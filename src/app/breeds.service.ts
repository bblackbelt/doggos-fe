import { Injectable } from '@angular/core';
import { Observable, of, OperatorFunction } from 'rxjs';
import { Breed } from './breeds/Breed';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  private breedsUrl = 'http://localhost:9090/breeds';

  constructor(private httpClient: HttpClient) { }

  getBreeds(): Observable<Breed[]>{
    return this.httpClient.get<Breed[]>(this.breedsUrl)
      .pipe(
        catchError(this.handleError<Breed[]>('getBreeds', []))
      );
  }

  private handleError<T>(operation: string = 'operation', result?: T): OperatorFunction<T, T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
