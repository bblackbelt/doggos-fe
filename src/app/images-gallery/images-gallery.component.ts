import { Component, OnInit } from '@angular/core';
import { Breed } from '../breeds/Breed';
import { Doggo } from './doggo';
import { DoggosFetcherService } from '../doggos-fetcher.service';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../data.service';

export interface DoggoView {
  row: number;
  col: number;
  url: string;
}

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

  doggoImages: Doggo[];

  constructor(private doggoService: DoggosFetcherService, private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchDoggos();
    this.dataService.onBreedChanged(null);
  }

  private fetchDoggos(): void {
    this.dataService.onBreedChanges()
      .pipe(
        switchMap((breedId: number) => this.doggoService.getDoggos(1, 24, breedId))
      )
      .subscribe(urls => this.doggoImages = urls);
  }
}
