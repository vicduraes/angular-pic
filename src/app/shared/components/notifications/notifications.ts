export class Notification {
  constructor(
    public readonly notificationType: NotificationTypes,
    public readonly message: string
  ) {}
}

export enum NotificationTypes {
  SUCCESS,
  WARNING,
  DANGER,
  INFO,
}
