import { Injectable } from '@angular/core';
import { Observable, of, OperatorFunction } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Doggo } from './images-gallery/doggo';

@Injectable({
  providedIn: 'root'
})
export class DoggosFetcherService {

  private doggosUrl = 'http://localhost:9090/';

  constructor(private httpClient: HttpClient) { }

  getDoggos(page: number, pageSize: number, breedId?: number): Observable<Doggo[]>{
    let url = `${this.doggosUrl}?page=${page}&limit=${pageSize}`;
    if (breedId) {
      url = `${url}&breed_id=${breedId}`;
    }
    return this.httpClient.get<Doggo[]>(url)
      .pipe(
        catchError(this.handleError<Doggo[]>('getDoggos', []))
      );
  }

  private handleError<T>(operation: string = 'operation', result?: T): OperatorFunction<T, T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
