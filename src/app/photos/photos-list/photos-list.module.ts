import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PhotosListComponent } from "./photos-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { PhotoModule } from "../photo/photo.module";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { CardModule } from "src/app/shared/components/card/card.module";
import { SearchComponent } from "./search/search.component";
import { DarkenOnHoverModule } from "./../../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
  declarations: [
    PhotosListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule,
    RouterModule,
  ],
})
export class PhotosListModule {}
