import {Injectable} from '@angular/core';
import * as _ from 'lodash';
export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface AvatarItem {
  name: string;
  assetPath: string;
  position: Position;
  size: Size;
}

export enum ItemCategory {
  Beard = 'BEARD',
  Hair = 'HAIR',
  Decoration = 'DECORATION',
}

export const BEARD_ITEMS = [
  {name: 'b1', assetPath: 'assets/beards/b1.svg', position: {x: 25, y: 140}, size: {width: 320, height: 280}},
  {name: 'b2', assetPath: 'assets/beards/b2.svg', position: {x: 25, y: 140}, size: {width: 320, height: 280}},
  {name: 'b3', assetPath: 'assets/beards/b3.svg', position: {x: 25, y: 140}, size: {width: 320, height: 280}},
  {name: 'b4', assetPath: 'assets/beards/b4.svg', position: {x: 25, y: 140}, size: {width: 320, height: 280}},
  {name: 'b5', assetPath: 'assets/beards/b5.svg', position: {x: 25, y: 140}, size: {width: 320, height: 280}},
  {name: 'b6', assetPath: 'assets/beards/b6.svg', position: {x: 25, y: 140}, size: {width: 320, height: 280}},
  {name: 'b7', assetPath: 'assets/beards/b7.svg', position: {x: 25, y: 140}, size: {width: 320, height: 280}},
  {name: 'b8', assetPath: 'assets/beards/b8.svg', position: {x: 25, y: 140}, size: {width: 320, height: 280}},
  {name: 'b9', assetPath: 'assets/beards/b9.svg', position: {x: 25, y: 140}, size: {width: 320, height: 280}},
];

export const HAIR_ITEMS = [
  {name: 'hair0', assetPath: 'assets/hairs/Hair0.svg', position: {x: 35, y: 25}, size: {width: 295, height: 240}},
  {name: 'hair1', assetPath: 'assets/hairs/Hair1.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair2', assetPath: 'assets/hairs/Hair2.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair3', assetPath: 'assets/hairs/Hair3.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair4', assetPath: 'assets/hairs/Hair4.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair5', assetPath: 'assets/hairs/Hair5.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair6', assetPath: 'assets/hairs/Hair6.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair7', assetPath: 'assets/hairs/Hair7.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair8', assetPath: 'assets/hairs/Hair8.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair9', assetPath: 'assets/hairs/Hair9.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair10', assetPath: 'assets/hairs/Hair10.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair11', assetPath: 'assets/hairs/Hair11.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair12', assetPath: 'assets/hairs/Hair12.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair13', assetPath: 'assets/hairs/Hair13.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair14', assetPath: 'assets/hairs/Hair14.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair15', assetPath: 'assets/hairs/Hair15.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
];

export const DECORATION_ITEMS = [
  {
    name: 'Access0',
    assetPath: 'assets/accessories/Access0.svg',
    position: {x: 37, y: 80},
    size: {width: 300, height: 280},
  },
  {
    name: 'Access1',
    assetPath: 'assets/accessories/Access1.svg',
    position: {x: 25, y: 80},
    size: {width: 320, height: 280},
  },
  {
    name: 'Access2',
    assetPath: 'assets/accessories/Access2.svg',
    position: {x: 25, y: 80},
    size: {width: 320, height: 280},
  },
  {
    name: 'Access3',
    assetPath: 'assets/accessories/Access3.svg',
    position: {x: 25, y: 80},
    size: {width: 320, height: 280},
  },
  {
    name: 'Access4',
    assetPath: 'assets/accessories/Access4.svg',
    position: {x: 25, y: 80},
    size: {width: 320, height: 280},
  },
];

@Injectable({
  providedIn: 'root',
})
export class AvatarItemsService {
  constructor() {}

  getBeardItems() {
    return BEARD_ITEMS;
  }

  getHairItems() {
    return HAIR_ITEMS;
  }

  getDecorationItems() {
    return DECORATION_ITEMS;
  }
}
