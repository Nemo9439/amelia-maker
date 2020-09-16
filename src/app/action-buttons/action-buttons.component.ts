import {Component, OnInit} from '@angular/core';
import {AvatarService} from '../avatar.service';
import {GoogleAnalyticsService} from '../google-analytics.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  constructor(public avatarService: AvatarService, private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit() {}

  download() {
    this.avatarService.saveAsPng();
    this.googleAnalyticsService.dispatchEvent(
      'actionButtons',
      'download',
      null,
      JSON.stringify(this.avatarService.avatarState.selectedItems)
    );
  }

  reset() {
    this.avatarService.resetAvatar();
    this.googleAnalyticsService.dispatchEvent('actionButtons', 'reset');
  }

  random() {
    this.avatarService.randomAvatar();
    this.googleAnalyticsService.dispatchEvent('actionButtons', 'random');
  }
}
