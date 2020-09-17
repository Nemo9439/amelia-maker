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
  Glass = 'GLASS',
  Hat = 'HAT',
  Headphone = 'HEADPHONE',
  Tie = 'TIE',
  Base = 'BASE',
}

export const NONE_ITEM = {name: 'none', assetPath: '', position: {x: 0, y: 0}, size: {width: 0, height: 0}};

export const BASE_ITEMS = [
  {name: 'base', assetPath: 'assets/base-amelia.svg', position: {x: 0, y: 0}, size: {width: 370, height: 370}},
];

export const addNamesToItems = (items: Partial<AvatarItem>[]): AvatarItem[] => {
  return _.map(items, (item: AvatarItem) => {
    const name = _.first(_.split(_.last(_.split(item.assetPath, '/')), '.')) || 'none';
    return {...item, name};
  });
};
