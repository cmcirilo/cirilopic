import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../../shared/components/message/message.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from '../../shared/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MessageModule, FormsModule, RouterModule, PhotoModule, ImmediateClickModule,
  ],
})
export class PhotoFormModule {
}
