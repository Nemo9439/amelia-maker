import {Component} from '@angular/core';
import {AvatarService} from './avatar.service';
import {BEARD_ITEMS} from './items/beard-items.const';
import {GLASS_ITEMS} from './items/glass-items.const';
import {HAIR_ITEMS} from './items/hair-items.const';
import {HAT_ITEMS} from './items/hat-items.const';
import {HEADPHONE_ITEMS} from './items/headphone-items.const';
import {ItemCategory} from './items/item-util';
import {TIE_ITEMS} from './items/tie-items.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Amelia Maker';
  ItemCategory = ItemCategory;

  BEARD_ITEMS = BEARD_ITEMS;
  HAIR_ITEMS = HAIR_ITEMS;
  GLASS_ITEMS = GLASS_ITEMS;
  HAT_ITEMS = HAT_ITEMS;
  HEADPHONE_ITEMS = HEADPHONE_ITEMS;
  TIE_ITEMS = TIE_ITEMS;

  constructor(public avatarService: AvatarService) {}
}
