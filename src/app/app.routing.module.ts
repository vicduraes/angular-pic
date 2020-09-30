import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PhotosListComponent } from "./photos/photos-list/photos-list.component";
import { PhotosFormComponent } from "./photos/photos-form/photos-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";

const routes: Routes = [
  { path: "user/:userName", component: PhotosListComponent },
  { path: "p/add", component: PhotosFormComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
