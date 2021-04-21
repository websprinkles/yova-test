import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { Notifications, Notification, DateFormat } from '../entities/notifications';

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {
  private jsonData = '../../assets/data/notifications.json';
  private notifications: BehaviorSubject<Notification[]> = new BehaviorSubject<Notification[]>(null);
  private notificationArray: Notification[] = [];
  private dateFormat = DateFormat;

  constructor(private http: HttpClient) { }

  getJSON(): Observable<Notification[]> {
    return this.http.get<Notifications>(this.jsonData)
      .pipe(
        map(data => data.notifications.sort((a, b) => this.compareDates(a, b)))
      );
  }

  getNotifications(): Observable<Notification[]> {
    return this.notifications.asObservable();
  }

  setNotifications(notifications: Notification[]) {
    this.notificationArray = notifications;
    this.notifications.next(notifications);
  }

  addNotification(item: Notification) {
    const now = moment(new Date()).format(this.dateFormat).toString();
    const newItem = { ...item, date: now };
    this.notificationArray.unshift(newItem);
    this.setNotifications(this.notificationArray);
  }

  setStatus(item: Notification, value: string) {
    // date serves as ID
    let selectedItem = this.notificationArray.find(x => x.date === item.date);
    selectedItem.status = value;
    this.setNotifications(this.notificationArray);
  }

  compareDates(a: Notification, b: Notification) {
    // assuming all dates have the same format
    const firstDate = moment(a.date, this.dateFormat);
    const secondDate = moment(b.date, this.dateFormat);

    if (firstDate < secondDate) {
      return 1;
    } else if (firstDate > secondDate) {
      return -1;
    } else {
      return 0;
    }
  }
}
