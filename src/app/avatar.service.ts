import {Injectable} from '@angular/core';
import * as svgHelper from 'save-svg-as-png';
import * as d3 from 'd3';
@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  constructor() {}

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
    svgHelper.svgAsDataUri(d3.select('#avatar').node(), {}, function(uri) {
      console.log('uri', uri);
    });
  }
}
