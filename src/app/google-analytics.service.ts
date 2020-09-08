import {Injectable} from '@angular/core';
declare let ga: Function; // Declare ga as a function

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor() {}
  
  public dispatchEvent(eventCategory: string, eventAction: string, eventValue?: number, eventLabel?: string) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventValue: eventValue,
      eventLabel: eventLabel,
    });
  }
}
