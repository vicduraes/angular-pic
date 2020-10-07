import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "./../photo/photo.service";
import { Photo } from "../photo/photo";

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
    private router: Router
  ) {}

  ngOnInit() {
    this.photoId = this.route.snapshot.params.id;
    this.photo$ = this.photoService.findById(this.photoId);
  }

  removePhoto() {
    this.photoService
      .removePhoto(this.photoId)
      .subscribe(() => this.router.navigate([""]));
  }
}
