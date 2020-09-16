import {addNamesToItems, NONE_ITEM} from './item-util';

export const TIE_ITEMS = addNamesToItems([
  {assetPath: 'assets/ties/Ties1.svg', position: {x: 73, y: 330}, size: {width: 231, height: 132}},
  {
    assetPath: 'assets/ties/Ties2.svg',
    position: {x: 45, y: 315},
    size: {width: 287, height: 160},
  },
  {assetPath: 'assets/ties/Ties3.svg', position: {x: 47, y: 300}, size: {width: 287, height: 160}},
  {assetPath: 'assets/ties/Ties4.svg', position: {x: 60, y: 315}, size: {width: 260, height: 160}},
  NONE_ITEM,
]);
