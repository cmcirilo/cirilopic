import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';
import { catchError, map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

const API = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private httpClient: HttpClient) {
  }

  listFromUser(userName: string) {
    return this.httpClient.get<Photo[]>(API + '/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.httpClient.get<Photo[]>(API + '/' + userName + '/photos', { params });
  }

  upload(description: string, allowComments: boolean, file: File) {

    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.httpClient.post(API + '/photos/upload', formData, { observe: 'events', reportProgress: true });
  }

  findById(photoId: number) {
    return this.httpClient.get<Photo>(API + '/photos/' + photoId);
  }

  getComments(photoId: number) {
    return this.httpClient.get<PhotoComment[]>(API + '/photos/' + photoId + '/comments');
  }

  addComment(photoId: number, commentText: string) {
    return this.httpClient.post(API + '/photos/' + photoId + '/comments', { commentText });
  }

  removePhoto(photoId: number) {
    return this.httpClient.delete(API + '/photos/' + photoId);
  }

  like(photooId: number) {

    return this.httpClient.post(API + '/photos/' + photooId + '/like', {}, { observe: 'response' })
      .pipe(map(res => true))
      .pipe(catchError(err => {
        return err.status === '304' ? of(false) : throwError(err);
      }));
  }
}
