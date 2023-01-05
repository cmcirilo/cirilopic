import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageModule } from '../shared/components/message/message.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SignInComponent, SignupComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MessageModule,
    RouterModule,
  ],
})
export class HomeModule {

}
