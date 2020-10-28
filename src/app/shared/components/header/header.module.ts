import { OnlyLoggedModule } from "./../../directives/only-logged/only-logged.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { NotificationsModule } from "../notifications/notifications.module";
import { LoadingModule } from "./../loading/loading.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NotificationsModule,
    LoadingModule,
    OnlyLoggedModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
