import { Component, Input } from '@angular/core';

const PHOTO_STORAGE_URL = 'http://localhost:3000/imgs/';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
})
export class PhotoComponent {

  @Input() description = '';

  private _url = '';

  get url() {
    return this._url;
  }

  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = PHOTO_STORAGE_URL + url;
    } else {
      this._url = url;
    }
  }
}
