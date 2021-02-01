import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private breedSubject: Subject<number> = new Subject<number>();

  constructor() { }

  onBreedChanges(): Observable<number> {
    return this.breedSubject.asObservable()
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      );
  }

  onBreedChanged(id: number): void {
    this.breedSubject.next(id);
  }
}
