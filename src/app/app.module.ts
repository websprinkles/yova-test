import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateStringPipe } from './pipes/dateString.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    DashboardComponent,
    AlertsComponent,
    DateStringPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
