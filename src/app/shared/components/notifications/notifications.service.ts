import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Subject } from "rxjs";

import { Notification, NotificationTypes } from "./notifications";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  notificationSubject: Subject<Notification> = new Subject<Notification>();
  keepAfterRouteChange = false;

  constructor(router: Router) {
    if (event instanceof NavigationStart) {
      if (this.keepAfterRouteChange) {
        this.keepAfterRouteChange = false;
      } else {
        this._clear();
      }
    }
  }

  success(message: string, keepAfterRouteChange = false) {
    return this._notification(
      NotificationTypes.SUCCESS,
      message,
      keepAfterRouteChange
    );
  }

  warning(message: string, keepAfterRouteChange = false) {
    return this._notification(
      NotificationTypes.WARNING,
      message,
      keepAfterRouteChange
    );
  }

  danger(message: string, keepAfterRouteChange = false) {
    return this._notification(
      NotificationTypes.DANGER,
      message,
      keepAfterRouteChange
    );
  }

  info(message: string, keepAfterRouteChange = false) {
    return this._notification(
      NotificationTypes.INFO,
      message,
      keepAfterRouteChange
    );
  }

  private _notification(
    notificationType: NotificationTypes,
    message: string,
    keepAfterRouteChange = false
  ) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    return this.notificationSubject.next(
      new Notification(notificationType, message)
    );
  }

  getNotification() {
    return this.notificationSubject.asObservable();
  }

  private _clear() {
    this.notificationSubject.next(null);
  }
}
