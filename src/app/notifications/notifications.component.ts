import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: Notification[];
  notificationsSubscription: Subscription;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationsSubscription = this.notificationsService.getNotifications().subscribe(data => {
      if (data && data['notifications']) {
        this.notifications = data['notifications'] as Notification[];
      }
    });
  }

  ngOnDestroy(): void {
    this.notificationsSubscription.unsubscribe();
  }

}
