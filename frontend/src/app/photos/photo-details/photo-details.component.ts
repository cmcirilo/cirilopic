import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';
import { AlertService } from '../../shared/components/alert/alert.service';
import { UserService } from '../../core/user/user.service';

@Component({
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(private route: ActivatedRoute,
              private photoService: PhotoService,
              private router: Router,
              private alertService: AlertService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(() => {
    }, error => {
      console.log(error);
      this.router.navigate(['not-found']);
    });
  }

  remove() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(() => {
        this.alertService.success('Photo removed', true);
        this.router.navigate(['/user', this.userService.getUserName()], { replaceUrl: true });
      }, error => {
        console.log(error);
        this.alertService.warning('Could not delete the photo');
      });
  }

  like(photo: Photo) {
    this.photoService.like(photo.id)
      .subscribe(liked => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);
        }
      });
  }
}
