import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover.module';

@NgModule({
  declarations: [PhotoListComponent, PhotosComponent, LoadButtonComponent, FilterByDescriptionPipe, SearchComponent],
  imports: [CommonModule, PhotoModule, CardModule, DarkenOnHoverModule],
})
export class PhotoListModule {
}
