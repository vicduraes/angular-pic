import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http";

import { PhotoService } from "./../photo/photo.service";
import { UserService } from "./../../core/user.service";
import { NotificationsService } from "./../../shared/components/notifications/notifications.service";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-photos-form",
  templateUrl: "./photos-form.component.html",
})
export class PhotosFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private notificationService: NotificationsService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ["", Validators.required],
      description: ["", Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const description = this.photoForm.get("description").value;
    const allowComments = this.photoForm.get("allowComments").value;
    this.photoService
      .upload(description, allowComments, this.file)
      .pipe(
        finalize(() =>
          this.router.navigate(["/user", this.userService.getUserName()])
        )
      )
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type == HttpEventType.UploadProgress) {
            this.percentDone = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.notificationService.success("Upload complete!", true);
          }
        },
        (err) => {
          this.notificationService.danger(
            "Could not complete upload! Try again later"
          );
          console.error(err.message);
        }
      );
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
