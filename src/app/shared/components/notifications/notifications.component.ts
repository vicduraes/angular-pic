import { NotificationsService } from "./notifications.service";
import { Component, Input, OnInit } from "@angular/core";

import { Notification, NotificationTypes } from "./notifications";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
})
export class NotificationsComponent implements OnInit {
  @Input() timeout = 3000;
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationsService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe((notification) => {
      if (!notification) {
        this.notifications = [];
        return;
      }
      this.notifications.push(notification);
      setTimeout(() => this.removeNotification(notification), this.timeout);
    });
  }

  removeNotification(notificationToRemove: Notification) {
    this.notifications = this.notifications.filter(
      (notification) => notification != notificationToRemove
    );
  }

  getNotificationClass(notification: Notification) {
    if (!notification) return "";

    switch (notification.notificationType) {
      case NotificationTypes.SUCCESS:
        return "alert alert-success";
      case NotificationTypes.WARNING:
        return "alert alert-warning";
      case NotificationTypes.DANGER:
        return "alert alert-danger";
      case NotificationTypes.INFO:
        return "alert alert-info";
    }
  }
}
