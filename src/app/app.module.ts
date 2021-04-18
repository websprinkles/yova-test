import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [	
    AppComponent,
    NotificationsComponent,
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
