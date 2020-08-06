import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // var circle = d3.selectAll('circle');
    // circle.style('fill', 'steelblue');
    // circle.attr('r', 30);

    const width = 300,
      height = 300;

    const svg = d3
      .select('#main')
      .append('svg')
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
