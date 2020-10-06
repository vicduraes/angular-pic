import { ImmediateClickDirective } from "./immediate-click.directive";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [ImmediateClickDirective],
  exports: [ImmediateClickDirective],
})
export class ImmediateClickModule {}
