import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OnlyOwnerDirective } from "./only-owner.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [OnlyOwnerDirective],
  exports: [OnlyOwnerDirective],
})
export class OnlyOwnerModule {}
