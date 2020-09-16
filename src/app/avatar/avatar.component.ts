import {Component, Input, OnChanges} from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import {AvatarState} from '../avatar.service';
import {AvatarItem} from '../items/item-util';

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
    const width = 500,
      height = 500;
    const svg = d3.select('#main').append('svg').attr('id', 'avatar').attr('width', width).attr('height', height);
    const ameliaBox = svg.append('g').attr('transform', 'translate(65,65)');

    const ameliaContainer = ameliaBox.append('svg').attr('width', 370).attr('height', 370);

    const data = await d3.svg('assets/base-amelia.svg');
    ameliaContainer.node().append(data.documentElement);

    if (!this.avatarState.selectedItems) {
      return;
    }
    _.map(this.avatarState.selectedItems, item => this.drawSelectedItem(ameliaBox, item));
  }
}
