import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { SignUpService } from './sign-up.service';

@Component({
  templateUrl: './sign-up.component.html',
  providers: [UserNotTakenValidatorService],
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') inputEmail: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
              private userNotTakenValidatorService: UserNotTakenValidatorService,
              private signUpService: SignUpService,
              private router: Router,
              private platformDetectorService: PlatformDetectorService) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), lowerCaseValidator], this.userNotTakenValidatorService.checkUserNameTaken()],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]],
    });

    this.platformDetectorService.isPlatformBrowser() && this.inputEmail.nativeElement.focus();
  }

  signup() {
    if (this.signupForm.valid && !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signUpService
        .signup(newUser)
        .subscribe(
          () => this.router.navigate(['']),
          err => console.log(err));
    }
  }
}
