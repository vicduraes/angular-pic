import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "./../photo/photo.service";
import { Photo } from "../photo/photo";
import { NotificationsService } from "./../../shared/components/notifications/notifications.service";
import { UserService } from "./../../core/user.service";

@Component({
  selector: "app-photo-details",
  templateUrl: "./photo-details.component.html",
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private notificationService: NotificationsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.photoId = this.route.snapshot.params.id;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      (err) => {
        console.error(err.message);
        this.router.navigate(["not-found"]);
      }
    );
  }

  removePhoto() {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.notificationService.success("Photo was removed!", true);
        this.router.navigate(["/user", this.userService.getUserName()]);
      },
      (err) => {
        this.notificationService.warning("Could not delete the photo!");
        console.error(err.message);
      }
    );
  }

  like(photo: Photo) {
    this.photoService.like(photo.id).subscribe((liked) => {
      if (liked) {
        this.photo$ = this.photoService.findById(photo.id);
      }
    });
  }
}
