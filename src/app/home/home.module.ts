import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { SmallMessageModule } from "../shared/components/small-message/small-message.module";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SmallMessageModule,
    RouterModule,
    HomeRoutingModule,
  ],
  declarations: [SigninComponent, SignupComponent, HomeComponent],
})
export class HomeModule {}
