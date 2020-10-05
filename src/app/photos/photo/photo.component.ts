import { environment } from "src/environments/environment";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-photo",
  templateUrl: "photo.component.html",
})
export class PhotoComponent {
  private _url = "";

  @Input() description = "";

  @Input() set url(url: string) {
    if (!url.startsWith("data")) {
      this._url = `${environment.URL_IMG}${url}`;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }
}
