import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    ActionButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
