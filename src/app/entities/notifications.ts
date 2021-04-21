export interface Notification {
  date: string;
  title: string;
  desc: string;
  active: boolean;
  status: string;
}

export interface Notifications {
  notifications: Notification[];
}

export enum Status {
  OLD = 'old',
  NEW = 'new'
}

export const DateFormat = 'ddd, D MMM YYYY HH:mm:ss Z';
