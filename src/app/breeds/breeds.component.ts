import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../breeds.service';
import { Breed } from './Breed';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';

export interface BreedView {
  breed: Breed;
  state: boolean;
}


@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

  breeds: BreedView[];

  private selectedBreed?: BreedView = null;

  constructor(private breedsService: BreedsService, private dataService: DataService) { }

  ngOnInit(): void {
    this.initBreeds();
  }

  initBreeds(): void {
    this.breedsService.getBreeds()
    .pipe(
      map((mapBreeds: Breed[]) => mapBreeds.map(b => ({ breed: b, state: false } as BreedView)))
    )
    .subscribe(breedsView =>  {
        this.breeds = breedsView;
    });
  }

  onBreedSelect(breed: BreedView): void {
    this.breeds.forEach(b =>
      b === breed ? (b.state = !b.state) : (b.state = false)
    );
    let breedId = null;
    if (this.selectedBreed === breed) {
      this.selectedBreed = null;
    } else {
      this.selectedBreed = breed;
      breedId = breed.breed.id;
    }
    this.dataService.onBreedChanged(breedId);
  }
}
