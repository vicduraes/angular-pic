import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";

import { FooterComponent } from "./footer.component";
import { UserService } from "./../../../core/user.service";

describe("Footer component", () => {
  let component: FooterComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UserService],
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    const userService = TestBed.get(UserService);
    spyOn(userService, "getUser").and.returnValue(
      of({
        email: "audre@email.com",
        name: "Audre Lorde",
        id: 1,
      })
    );

    const fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Must be instanciated", () => {
    expect(component).toBeTruthy();
  });
});
