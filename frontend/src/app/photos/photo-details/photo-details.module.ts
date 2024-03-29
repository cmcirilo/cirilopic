import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../../shared/components/message/message.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from '../../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent, PhotoOwnerOnlyDirective],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
  imports: [CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, MessageModule, ShowIfLoggedModule],
})
export class PhotoDetailsModule {

}
