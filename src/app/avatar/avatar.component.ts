import {AvatarItem} from './../avatar-items.service';
import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import * as d3 from 'd3';
import * as _ from 'lodash';
import {AvatarState} from '../avatar.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnChanges {
  @Input() avatarState: AvatarState;

  ngOnChanges(changes: SimpleChanges) {
    this.render();
  }

  private drawSelectedItem(ameliaBox, item: AvatarItem) {
    // const item = this.avatarState.selectedItems.BEARD;
    return ameliaBox
      .append('svg:image')
      .attr('xlink:href', item.assetPath)
      .attr('width', item.size.width)
      .attr('height', item.size.height)
      .attr('x', item.position.x)
      .attr('y', item.position.y);
  }

  render() {
    d3.select('#avatar').remove();
    const width = 500,
      height = 500;
    const svg = d3
      .select('#main')
      .append('svg')
      .attr('id', 'avatar')
      .attr('width', width)
      .attr('height', height);
    const g = svg.append('g');
    const bg = g
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'tomato')
      .attr('opacity', 0.1);
    const ameliaBox = svg.append('g').attr('transform', 'translate(65,65)');

    const amelia = ameliaBox
      .append('svg:image')
      .attr('xlink:href', 'assets/base-amelia.svg')
      .attr('width', 370)
      .attr('height', 370);

    if (!this.avatarState.selectedItems) {
      return;
    }
    _.map(this.avatarState.selectedItems, item => this.drawSelectedItem(ameliaBox, item));
  }
}
