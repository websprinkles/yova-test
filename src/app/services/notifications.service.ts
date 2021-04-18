import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Notification {
  date: string;
  title: string;
  desc: string;
  active: boolean;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationsUrl = '../../assets/data/notifications.json';

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.notificationsUrl);
  }
}
