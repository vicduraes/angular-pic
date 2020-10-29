import { TestBed } from "@angular/core/testing";

import { UserService } from "src/app/core/user.service";

describe("UserService", () => {
  let userService: UserService;
  let validToken: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    });
    userService = TestBed.get(UserService);
    validToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwMzkzMjIwMiwiZXhwIjoxNjA0MDE4NjAyfQ.xPCs-q1O_1WcfxQyg0K5vgRIdCi7uuZFvCj61-0x6IA";
  });

  it("must be instantiated", () => {
    expect(userService).toBeTruthy();
  });

  it("must be recover user informations", () => {
    userService.setToken(validToken);
    expect(userService.isLogged()).toBeTruthy();
    expect(userService.getUserName()).toEqual("flavio");
    userService.getUser().subscribe((user) => {
      expect(user.name).toBe("flavio");
    });
  });

  it("must logout user account", () => {
    userService.setToken(validToken);
    userService.logout();
    expect(userService.isLogged()).toBeFalsy();
  });
});
