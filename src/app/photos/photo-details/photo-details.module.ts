import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from "./../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { SmallMessageModule } from "src/app/shared/components/small-message/small-message.module";
import { OnlyLoggedModule } from "./../../shared/directives/only-logged/only-logged.module";
import { OnlyOwnerModule } from "./../../shared/directives/only-owner/only-owner.module";

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SmallMessageModule,
    OnlyOwnerModule,
    OnlyLoggedModule,
  ],
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
})
export class PhotoDetailsModule {}
