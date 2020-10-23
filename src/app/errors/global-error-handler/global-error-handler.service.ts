import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { ServerLog } from "./server-log";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GlobalErrorHandlerService {
  constructor(private http: HttpClient) {}

  log(serverLog: ServerLog) {
    return this.http.post(`${environment.SERVER_LOG}/infra/log`, serverLog);
  }
}
