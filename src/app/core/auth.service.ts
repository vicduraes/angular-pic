import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

import { TokenService } from "./token.service";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  authenticate(userName: string, password: string) {
    return this.http
      .post(
        `${environment.API}/user/login`,
        {
          userName,
          password,
        },
        { observe: "response" }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get("x-access-token");
          this.tokenService.setToken(authToken);
          console.log(`User ${userName} authenticated with token ${authToken}`);
        })
      );
  }
}
