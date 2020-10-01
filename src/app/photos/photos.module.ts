import { NgModule } from "@angular/core";

import { PhotoModule } from "./photo/photo.module";
import { PhotosListModule } from "./photos-list/photos-list.module";
import { PhotosFormModule } from "./photos-form/photos-form.module";

@NgModule({
  imports: [PhotoModule, PhotosFormModule, PhotosListModule],
})
export class PhotosModule {}
