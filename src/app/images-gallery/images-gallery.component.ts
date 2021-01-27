import { Component, OnInit } from '@angular/core';
import { Breed } from '../breeds/Breed';
import { Doggo } from './doggo';
import { DoggosFetcherService } from '../doggos-fetcher.service';
import { map } from 'rxjs/operators'
import { from } from 'rxjs';

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

  doggoImages: DoggoView[];

  constructor(private doggoService: DoggosFetcherService) { }

  ngOnInit(): void {
    this.fetchDoggos(1, 24, null);
  }

  fetchDoggos(page: number, pageSize: number, breedId?: number) {
    this.doggoService.getDoggos(page, pageSize, breedId)
      .pipe (
        map(doggos => this.dataPartion(doggos))
      )
      .subscribe(urls => this.doggoImages = urls)
  }

  dataPartion (input: Doggo[]): DoggoView[] {
    var newArr: DoggoView[] = [];
    for (var i = 0; i < input.length; i++) {
        var col = 1 + Math.round(Math.random()*1)
        var row: number
        if (col > 1) row = 1 + Math.round(Math.random()*3)
        else row =1
        newArr.push(({ 
          row, 
          col, 
          url: input[i].url 
        } as DoggoView))
    }
    console.log(newArr)
    return newArr;
  }
}
