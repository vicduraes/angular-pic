import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PhotosListComponent } from "./photos/photos-list/photos-list.component";
import { PhotosFormComponent } from "./photos/photos-form/photos-form.component";
import { PhotoDetailsComponent } from "./photos/photo-details/photo-details.component";
import { PhotosListResolver } from "./photos/photos-list/photos-list.resolver";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { GlobalErrorComponent } from "./errors/global-error/global-error.component";
import { AuthGuard } from "./core/auth.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  {
    path: "user/:userName",
    component: PhotosListComponent,
    resolve: {
      photos: PhotosListResolver,
    },
    data: {
      title: "Timeline",
    },
  },
  {
    path: "photo/add",
    component: PhotosFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: "Photo upload",
    },
  },
  {
    path: "photo/:id",
    component: PhotoDetailsComponent,
    data: {
      title: "Photo details",
    },
  },
  {
    path: "not-found",
    component: NotFoundComponent,
    data: {
      title: "Not found",
    },
  },
  {
    path: "error",
    component: GlobalErrorComponent,
    data: {
      title: "Error",
    },
  },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
