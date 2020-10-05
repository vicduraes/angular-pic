import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { UserService } from "./../../../core/user.service";
import { User } from "src/app/core/user";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }
}
