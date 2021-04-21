import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yova-test';

  constructor(private notificationsService: NotificationsService) {
  }

  ngOnInit() {
    // Getting the initial data (just for demonstration).
    this.notificationsService.getJSON()
      .pipe(first())
      .subscribe(data => {
        this.notificationsService.setNotifications(data);
      })
  }
}
