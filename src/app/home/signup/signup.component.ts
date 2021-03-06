import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { SignupService } from "./signup.service";
import { CheckUserService } from "./check-user.service";
import { NewUser } from "./new-user";
import { userNamePassword } from "./username-password.validator";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  providers: [CheckUserService],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild("inputEmail") inputEmail: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private checkUser: CheckUserService,
    private signupService: SignupService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        fullName: [
          "",
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(40),
          ],
        ],
        userName: [
          "",
          [
            Validators.required,
            Validators.pattern(/^[a-z0-9_\-]+$/),
            Validators.minLength(4),
            Validators.maxLength(15),
          ],
          this.checkUser.checkUserName(),
        ],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
          ],
        ],
      },
      {
        validator: userNamePassword,
      }
    );
    this.inputEmail.nativeElement.focus();
  }

  signup() {
    if (this.signupForm.valid && !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signupService.signup(newUser).subscribe(
        () => this.router.navigate([""]),
        (err) => console.error(err.message)
      );
    }
  }
}
