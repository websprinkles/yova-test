import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Notification, Status } from '../entities/notifications';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  demoNotification: Notification = {
    date: '',
    status: Status.NEW,
    desc: '<p>Description is missing...</p>',
    title: 'New demo notification',
    active: true
  };

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
  }

  addNotification(): void {
    this.notificationsService.addNotification(this.demoNotification);
  }

}
