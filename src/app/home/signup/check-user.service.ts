import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

import { SignupService } from "./signup.service";

@Injectable()
export class CheckUserService {
  constructor(private signupService: SignupService) {}

  checkUserName() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap((userName) =>
            this.signupService.checkUserNameTaken(userName)
          )
        )
        .pipe(map((exists) => (exists ? { userNameExists: true } : null)))
        .pipe(first());
    };
  }
}
