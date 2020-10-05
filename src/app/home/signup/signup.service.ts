import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { NewUser } from "./new-user";

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}

  checkUserNameTaken(userName: string) {
    return this.http.get(`${environment.API}/user/exists/${userName}`);
  }

  signup(newUser: NewUser) {
    return this.http.post(`${environment.API}/user/signup`, newUser);
  }
}
