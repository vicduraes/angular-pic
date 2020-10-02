import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(userName: string, password: string) {
    return this.http.post(`${environment.API}/user/login`, {
      userName,
      password,
    });
  }
}
