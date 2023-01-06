import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageModule } from '../shared/components/message/message.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpComponent } from './signup/sign-up.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, HomeComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MessageModule,
    RouterModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {

}
