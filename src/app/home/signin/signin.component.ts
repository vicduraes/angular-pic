import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { AuthService } from "./../../core/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
})
export class SigninComponent implements OnInit {
  fromUrl: string;
  loginForm: FormGroup;
  @ViewChild("userNameInput") userNameInput: ElementRef<HTMLElement>;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) => (this.fromUrl = params.fromUrl)
    );
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get("userName").value;
    const password = this.loginForm.get("password").value;
    this.auth.authenticate(userName, password).subscribe(
      () =>
        this.fromUrl
          ? this.router.navigateByUrl(this.fromUrl)
          : this.router.navigateByUrl(`user/${userName}`),
      (err) => {
        console.error(err.message);
        this.loginForm.reset();
        this.userNameInput.nativeElement.focus();
      }
    );
  }
}
