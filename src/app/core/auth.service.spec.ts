import { fakeAsync, TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { AuthService } from "./auth.service";
import { UserService } from "src/app/core/user.service";
import { tick } from "@angular/core/src/render3";

describe("AuthService", () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });

  it("must be instantiated", () => {
    expect(service).toBeTruthy();
  });

  it("must be to authenticate user", fakeAsync(() => {
    const spy = spyOn(userService, "setToken").and.returnValue(null);

    const fakeBody = {
      id: 1,
      nome: "Eduardo Galeano",
      email: "galeano@email.com",
    };

    service.authenticate("galeano", "veiasabertas").subscribe((response) => {
      expect(response.body).toEqual(fakeBody);
      expect(spy).toHaveBeenCalledWith("tokenTest");
    });

    const request = httpMock.expectOne((req) => {
      return req.method === "POST";
    });

    request.flush(fakeBody, {
      headers: {
        "x-access-token": "tokenTest",
      },
    });
  }));
});
