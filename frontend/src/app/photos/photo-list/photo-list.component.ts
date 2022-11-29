import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list', templateUrl: './photo-list.component.html', styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter = '';
  filterSubject = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.filterSubject
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy() {
    this.filterSubject.unsubscribe();
  }

}
