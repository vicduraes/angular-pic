import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SigninComponent } from "./signin/signin.component";
import { SmallMessageModule } from "../shared/components/small-message/small-message.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SmallMessageModule],
  declarations: [SigninComponent],
})
export class HomeModule {}
