import {Component, Input, OnChanges} from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import {AvatarState} from '../avatar.service';
import {AvatarItem, ItemCategory} from '../items/item-util';

// export const AMELIA_BASE = 'ameliaBase';

export const layersOrder = [
  ItemCategory.Glass,
  ItemCategory.Base,
  ItemCategory.Beard,
  ItemCategory.Hair,
  ItemCategory.Decoration,
  ItemCategory.Headphone,
  ItemCategory.Hat,
];

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnChanges {
  @Input() avatarState: AvatarState;

  ngOnChanges() {
    this.render();
  }

  private async drawSelectedItem(ameliaBox, item: AvatarItem) {
    if (!item) {
      return;
    }
    const itemContainer = ameliaBox
      .append('svg')
      .attr('width', item.size.width)
      .attr('height', item.size.height)
      .attr('x', item.position.x)
      .attr('y', item.position.y);

    const data = await d3.svg(item.assetPath);
    itemContainer.node().append(data.documentElement);
  }

  async render() {
    d3.select('#avatar').remove();
    const width = 600,
      height = 600;
    const svg = d3.select('#main').append('svg').attr('id', 'avatar').attr('width', width).attr('height', height);
    const ameliaBox = svg.append('g').attr('transform', 'translate(110,110)');

    if (!this.avatarState.selectedItems) {
      return;
    }

    layersOrder.forEach(async itemCategory => {
      // if (itemCategory === AMELIA_BASE) {
      //   const data = await d3.svg('assets/base-amelia.svg');
      //   const ameliaContainer = ameliaBox.append('svg').attr('width', 370).attr('height', 370);
      //   ameliaContainer.node().append(data.documentElement);
      //   return;
      // }
      await this.drawSelectedItem(ameliaBox, this.avatarState.selectedItems[itemCategory]);
    });
  }
}
