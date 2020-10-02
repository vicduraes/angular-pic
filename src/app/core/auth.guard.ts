import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.userService.isLogged()) {
      this.router.navigate(["user", this.userService.getUserName()]);
      return false;
    }
    return true;
  }
}
