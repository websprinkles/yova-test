import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationsService } from '../../services/notifications.service';
import { Notification, Status } from '../../entities/notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alerts: Notification[];
  alertsSubscription: Subscription;
  statusOld = Status.OLD;
  statusNew = Status.NEW;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.getAlerts();
  }

  getAlerts(): void {
    this.alertsSubscription = this.notificationsService.getNotifications()
      .subscribe(data => {
        this.alerts = this.filterData(data);
      });
  }

  filterData(data): Notification[] {
    if (data && data.length > 0) {
      return data.filter(x => x.status === this.statusNew);
    }
  }

  markAsOld(notification): void {
    this.notificationsService.setStatus(notification, this.statusOld);
  }

  ngOnDestroy(): void {
    this.alertsSubscription.unsubscribe();
  }

}
