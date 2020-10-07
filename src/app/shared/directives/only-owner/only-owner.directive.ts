import { UserService } from "./../../../core/user.service";
import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

import { Photo } from "./../../../photos/photo/photo";

@Directive({
  selector: "[photoOnlyOwner]",
})
export class OnlyOwnerDirective implements OnInit {
  @Input() ownerPhoto: Photo;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      if (!user || user.id != this.ownerPhoto.userId) {
        this.renderer.setStyle(this.element.nativeElement, "display", "none");
      }
    });
  }
}
