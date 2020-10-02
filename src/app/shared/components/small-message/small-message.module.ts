import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SmallMessageComponent } from "./small-message.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SmallMessageComponent],
  exports: [SmallMessageComponent],
})
export class SmallMessageModule {}
