import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { PhotoService } from "./../photo/photo.service";

@Component({
  selector: "app-photos-form",
  templateUrl: "./photos-form.component.html",
})
export class PhotosFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
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
    this.photoService.upload(description, allowComments, this.file).subscribe(
      () => this.router.navigate([""]),
      (err) => console.error(err.message)
    );
  }
}
