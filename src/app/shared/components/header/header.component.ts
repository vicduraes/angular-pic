import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "./../../../core/user.service";
import { User } from "src/app/core/user";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
  }

  ngOnInit() {}

  logout() {
    this.userService.logout();
    this.router.navigateByUrl("");
  }
}
