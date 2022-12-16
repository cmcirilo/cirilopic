import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageModule } from '../shared/components/message/message.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MessageModule,
  ],
})
export class HomeModule {

}
