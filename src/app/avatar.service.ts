import {Injectable} from '@angular/core';
import * as svgHelper from 'save-svg-as-png';
import * as d3 from 'd3';
import * as _ from 'lodash';
import {ItemCategory, AvatarItem, HAIR_ITEMS, DECORATION_ITEMS} from './avatar-items.service';

export interface AvatarState {
  selectedItems: {[key in ItemCategory]: AvatarItem};
}

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  constructor() {}

  avatarState = {
    selectedItems: {
      [ItemCategory.Hair]: _.first(HAIR_ITEMS),
      [ItemCategory.Decoration]: _.first(DECORATION_ITEMS),
    },
  };
  isAvatarVisible = true;

  refreshAvatar = () => {
    this.isAvatarVisible = false;
    setTimeout(() => {
      this.isAvatarVisible = true;
    });
  };

  saveAsPng() {
    svgHelper.saveSvgAsPng(d3.select('#avatar').node(), 'amelia.png', {
      scale: 1,
      encoderOptions: 1,
      backgroundColor: 'white',
    });
    this.refreshAvatar();
  }

  saveAsSvg() {
    svgHelper.svgAsDataUri(d3.select('#avatar').node(), {}, function(uri) {});
  }

  selectItem(avaterItem: AvatarItem, category: ItemCategory) {
    this.avatarState = {
      selectedItems: {...this.avatarState.selectedItems, [category]: avaterItem},
    };
  }
}
