import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../breeds.service';
import { Breed } from './Breed';
import { map } from 'rxjs/operators'

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

  constructor(private breedsService: BreedsService) { }

  ngOnInit(): void {
    this.initBreeds();
  }

  initBreeds(): void {
    console.log("aaaa")
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
  }
}
