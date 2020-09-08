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
    this.googleAnalyticsService.dispatchEvent('actionButtons', 'download');
    this.avatarService.saveAsPng();
  }

  reset() {
    this.googleAnalyticsService.dispatchEvent('actionButtons', 'reset');
  }

  random() {
    this.googleAnalyticsService.dispatchEvent('actionButtons', 'random');
  }
}
