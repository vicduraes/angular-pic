import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { NotificationsModule } from "../notifications/notifications.module";

@NgModule({
  imports: [CommonModule, RouterModule, NotificationsModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
