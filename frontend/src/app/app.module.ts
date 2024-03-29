import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhotosModule } from './photos/photos.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotosModule, AppRoutingModule, ErrorsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
