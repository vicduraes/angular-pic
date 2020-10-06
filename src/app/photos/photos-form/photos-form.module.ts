import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PhotosFormComponent } from "./photos-form.component";
import { SmallMessageModule } from "src/app/shared/components/small-message/small-message.module";
import { PhotoModule } from "./../photo/photo.module";

@NgModule({
  declarations: [PhotosFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SmallMessageModule,
    PhotoModule,
  ],
})
export class PhotosFormModule {}
