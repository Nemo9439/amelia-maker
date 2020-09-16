import {Injectable} from '@angular/core';
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
}
