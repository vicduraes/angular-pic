import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Photo } from "../photo/photo";
import { PhotoService } from "./../photo/photo.service";

@Component({
  selector: "app-photos-list",
  templateUrl: "./photos-list.component.html",
})
export class PhotosListComponent implements OnInit {
  filter: string = "";
  photos: Photo[] = [];
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data.photos;
    });
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = "";
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      });
  }
}
