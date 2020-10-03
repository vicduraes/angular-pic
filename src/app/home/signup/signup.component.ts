import { CheckUserService } from "./check-user.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private checkUser: CheckUserService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
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
    });
  }
}
