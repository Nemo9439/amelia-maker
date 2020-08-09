import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AvatarComponent} from './avatar/avatar.component';
import {ActionButtonsComponent} from './action-buttons/action-buttons.component';
import {ItemsMenuComponent} from './items-menu/items-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [AppComponent, AvatarComponent, ActionButtonsComponent, ItemsMenuComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatTabsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
