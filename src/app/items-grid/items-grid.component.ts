import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GoogleAnalyticsService} from '../google-analytics.service';
import {AvatarItem} from '../items/item-util';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent implements OnInit {
  @Input() items: AvatarItem[];
  @Output() selectItemEv: EventEmitter<AvatarItem> = new EventEmitter<AvatarItem>();

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit() {}

  getImageUrl(item: AvatarItem) {
    return {'background-image': `url(${item.assetPath})`};
  }

  selectItem(item: AvatarItem) {
    this.selectItemEv.emit(item);
    this.googleAnalyticsService.dispatchEvent('itemSelected', item.name, null, item.name);
  }
}
