import {Injectable} from '@angular/core';
import * as svgHelper from 'save-svg-as-png';
import * as d3 from 'd3';
import * as _ from 'lodash';
import {GLASS_ITEMS} from './items/glass-items.const';
import {HAIR_ITEMS} from './items/hair-items.const';
import {HAT_ITEMS} from './items/hat-items.const';
import {ItemCategory, AvatarItem, BASE_ITEMS} from './items/item-util';

export type SelectedItems = {
  [key in ItemCategory]: AvatarItem;
};

export interface AvatarState {
  selectedItems: Partial<SelectedItems>;
}

export const DEFAULT_ITEMS: Partial<SelectedItems> = {
  [ItemCategory.Hair]: _.first(HAIR_ITEMS),
  [ItemCategory.Glass]: _.first(GLASS_ITEMS),
  [ItemCategory.Base]: _.first(BASE_ITEMS),
};

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  constructor() {}

  avatarState = {
    selectedItems: DEFAULT_ITEMS,
  };
  isAvatarVisible = true;

  refreshAvatar = () => {
    this.isAvatarVisible = false;
    setTimeout(() => {
      this.isAvatarVisible = true;
    });
  };

  setAvatarItems(selectedItems: Partial<SelectedItems>) {
    this.avatarState.selectedItems = selectedItems;
    this.refreshAvatar();
  }

  resetAvatar() {
    this.setAvatarItems(DEFAULT_ITEMS);
  }

  randomAvatar() {
    const randomItems = {
      [ItemCategory.Hair]: _.sample(HAIR_ITEMS),
      [ItemCategory.Glass]: _.sample(GLASS_ITEMS),
      [ItemCategory.Hat]: _.sample(HAT_ITEMS),
      [ItemCategory.Base]: _.first(BASE_ITEMS),
    };
    this.setAvatarItems(randomItems);
  }

  saveAsPng() {
    svgHelper.saveSvgAsPng(d3.select('#avatar').node(), 'amelia.png', {
      scale: 1,
      encoderOptions: 1,
      backgroundColor: 'white',
    });
    this.refreshAvatar();
  }

  saveAsSvg() {
    svgHelper.svgAsDataUri(d3.select('#avatar').node(), {}, function (uri) {});
  }

  selectItem(avaterItem: AvatarItem, category: ItemCategory) {
    this.avatarState = {
      selectedItems: {...this.avatarState.selectedItems, [category]: avaterItem},
    };
  }
}
