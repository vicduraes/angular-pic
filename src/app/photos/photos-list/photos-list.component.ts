import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";

@Component({
  selector: "app-photos-list",
  templateUrl: "./photos-list.component.html",
  styleUrls: ["./photos-list.component.css"],
})
export class PhotosListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService
      .listFromUser(userName)
      .subscribe((photos) => (this.photos = photos));
  }
}
