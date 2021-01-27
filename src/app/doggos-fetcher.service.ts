import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Breed } from './breeds/Breed';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Doggo } from './images-gallery/doggo';

@Injectable({
  providedIn: 'root'
})
export class DoggosFetcherService {

  private doggosUrl = "http://35.223.140.47/"

  constructor(private httpClient: HttpClient) { }

  getDoggos(page: number, pageSize: number, breedId?: number):Observable<Doggo[]>{
    var url = `${this.doggosUrl}?page=${page}&limit=${pageSize}`
    if (breedId) {
      url = `${url}&breed_id=${breedId}`
    }
    return this.httpClient.get<Doggo[]>(url)
      .pipe(
        catchError(this.handleError<Doggo[]>('getDoggos', []))
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
