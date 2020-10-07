import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OnlyLoggedDirective } from "./only-logged.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [OnlyLoggedDirective],
  exports: [OnlyLoggedDirective],
})
export class OnlyLoggedModule {}
