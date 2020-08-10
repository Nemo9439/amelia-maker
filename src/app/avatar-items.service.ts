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
  Beards = 'BEARDS',
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
@Injectable({
  providedIn: 'root',
})
export class AvatarItemsService {
  constructor() {}

  
  getBeardItems() {
    return BEARD_ITEMS;
  }
}
