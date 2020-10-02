import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-small-message",
  templateUrl: "./small-message.component.html",
})
export class SmallMessageComponent implements OnInit {
  @Input() msg = "";
  constructor() {}

  ngOnInit() {}
}
