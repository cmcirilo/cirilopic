import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(private router: ActivatedRoute, private photoService: PhotoService) {
  }

  ngOnInit() {
    this.photoId = this.router.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }

}
