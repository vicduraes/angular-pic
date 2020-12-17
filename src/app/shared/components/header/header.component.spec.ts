import { Router } from "@angular/router";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";

import { HeaderComponent } from "./header.component";
import { UserService } from "./../../../core/user.service";
import { LoadingModule } from "./../loading/loading.module";
import { NotificationsModule } from "./../notifications/notifications.module";

describe("Header component", () => {
  let component: HeaderComponent;
  let userService: UserService;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [UserService],
      imports: [
        NotificationsModule,
        LoadingModule,
        RouterTestingModule.withRoutes([]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);

    spyOn(userService, "getUser").and.returnValue(
      of({
        email: "silvia@gmail.com",
        name: "Silvia Federici",
        id: 2,
      })
    );

    const fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Must be instanciated", () => {
    expect(component).toBeTruthy();
  });

  it("must logout user account", () => {
    const spy = spyOn(userService, "logout").and.returnValue(null);
    const navigateSpy = spyOn(router, "navigateByUrl");
    component.logout();
    expect(spy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith("");
  });
});
