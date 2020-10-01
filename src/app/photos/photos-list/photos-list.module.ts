import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotosListComponent } from "./photos-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { PhotoModule } from "../photo/photo.module";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { CardModule } from "src/app/shared/components/card/card.module";

@NgModule({
  declarations: [
    PhotosListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
  ],
  imports: [CommonModule, PhotoModule, CardModule],
})
export class PhotosListModule {}
