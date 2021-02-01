import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BreedsComponent } from './breeds/breeds.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagesGalleryComponent } from './images-gallery/images-gallery.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { environment } from 'src/environments/environment';
import { APIInterceptor } from './apiinterceptor';

@NgModule({
  declarations: [
    AppComponent,
    BreedsComponent,
    ImagesGalleryComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    MatChipsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    LazyLoadImageModule
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
