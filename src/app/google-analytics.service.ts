import {Injectable} from '@angular/core';
import {SelectedItems} from './avatar.service';
import * as _ from 'lodash';
import {AvatarItem} from './items/item-util';
declare let ga: Function; // Declare ga as a function

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor() {}

  dispatchEvent(eventCategory: string, eventAction: string, eventValue: number = null, eventLabel: string = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventValue: eventValue,
      eventLabel: eventLabel,
    });
  }

  sendDownloadedItems(selectedItems: Partial<SelectedItems>) {
    _.mapValues(selectedItems, (item: AvatarItem) => {
      if (!item) {
        return;
      }
      this.dispatchEvent('downloadItem', item.name);
    });
  }
}
