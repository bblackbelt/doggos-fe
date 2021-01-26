import { Component, OnInit } from '@angular/core';
import { Breed } from '../breeds/Breed';
import { Doggo } from './doggo';
import { DoggosFetcherService } from '../doggos-fetcher.service';
import { map } from 'rxjs/operators'
import { from } from 'rxjs';

export interface DoggoView {

}

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

  doggoImages: Doggo[];

  constructor(private doggoService: DoggosFetcherService) { }

  ngOnInit(): void {
    this.fetchDoggos(1, 25, null);
  }

  fetchDoggos(page: number, pageSize: number, breedId?: number) {
    this.doggoService.getDoggos(page, pageSize, breedId)
      .pipe (
        //map(doggos => this.dataPartion(doggos, doggos.length / 5))
      )
      .subscribe(urls => this.doggoImages = urls)
  }

  dataPartion (input, size): Doggo[] {
    var newArr: Doggo[] = [];
    for (var i = 0; i < input.length; i += size) {
        newArr.push(input.slice(i, i + size));
    }
    console.log(newArr)
    return newArr;
}

}
