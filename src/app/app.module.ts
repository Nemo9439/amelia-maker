import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AvatarComponent} from './avatar/avatar.component';
import {ActionButtonsComponent} from './action-buttons/action-buttons.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {ItemsGridComponent} from './items-grid/items-grid.component';
import {CommonModule} from '@angular/common';
import {MatRippleModule} from '@angular/material/core';
import {GoogleAnalyticsService} from './google-analytics.service';

@NgModule({
  declarations: [AppComponent, AvatarComponent, ActionButtonsComponent, ItemsGridComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule, MatTabsModule, MatButtonModule, MatRippleModule],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
