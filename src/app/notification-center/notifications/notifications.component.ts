import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NotificationsService} from '../../services/notifications.service';
import { Subscription } from 'rxjs';
import { Notification, Status } from '../../entities/notifications';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: Notification[];
  notificationsSubscription: Subscription;
  statusOld = Status.OLD;
  statusNew = Status.NEW;
  notificationToShow: number;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationsSubscription = this.notificationsService.getNotifications()
      .subscribe(data => {
        this.notifications = this.filterData(data);
      });
  }

  filterData(data): Notification[] {
    if (data && data.length > 0) {
      return data.filter(x => x.active === true);
    }
  }

  markAsOld(notification) {
    this.notificationsService.setStatus(notification, this.statusOld);
  }

  toggleContent(ind) {
    if (ind != this.notificationToShow){
      this.notificationToShow = ind;
    } else{
      this.notificationToShow = null;
    }
  }

  ngOnDestroy(): void {
    this.notificationsSubscription.unsubscribe();
  }

}
