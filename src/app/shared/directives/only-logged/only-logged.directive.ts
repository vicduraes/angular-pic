import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { UserService } from "src/app/core/user.service";

@Directive({
  selector: "[onlyLogged]",
})
export class OnlyLoggedDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    !this.userService.isLogged() &&
      this.renderer.setStyle(this.element.nativeElement, "display", "none");
  }
}
