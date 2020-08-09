import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as svgHelper from 'save-svg-as-png';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  ngOnInit() {
    this.render();
  }
  render() {
    const width = 300,
      height = 300;
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
    const amelia = g
      .append('svg:image')
      .attr('xlink:href', 'assets/amelia.svg')
      .attr('width', 200)
      .attr('height', 200)
      .attr('x', 50)
      .attr('y', 50);
  }
}
