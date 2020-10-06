import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { PhotoService } from "./../photo/photo.service";
import { Photo } from "../photo/photo";

@Component({
  selector: "app-photo-details",
  templateUrl: "./photo-details.component.html",
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.photo$ = this.photoService.findById(this.route.snapshot.params.id);
  }
}
