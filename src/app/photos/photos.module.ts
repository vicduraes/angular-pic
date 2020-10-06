import { NgModule } from "@angular/core";

import { PhotoModule } from "./photo/photo.module";
import { PhotosListModule } from "./photos-list/photos-list.module";
import { PhotosFormModule } from "./photos-form/photos-form.module";
import { PhotoDetailsModule } from "./photo-details/photo-details.module";

@NgModule({
  imports: [
    PhotoModule,
    PhotosFormModule,
    PhotosListModule,
    PhotoDetailsModule,
  ],
  declarations: [],
})
export class PhotosModule {}
