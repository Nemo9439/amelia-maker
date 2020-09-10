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
  {name: 'b1', assetPath: 'assets/beards/b1.svg', position: {x: 0, y: 140}, size: {width: 370, height: 280}},
  {name: 'b2', assetPath: 'assets/beards/b2.svg', position: {x: -10, y: 150}, size: {width: 385, height: 293}},
  {name: 'b3', assetPath: 'assets/beards/b3.svg', position: {x: 25, y: 140}, size: {width: 315, height: 280}},
  {name: 'b4', assetPath: 'assets/beards/b4.svg', position: {x: 63, y: 140}, size: {width: 250, height: 280}},
  {name: 'b5', assetPath: 'assets/beards/b5.svg', position: {x: 20, y: 140}, size: {width: 320, height: 335}},
  {name: 'b6', assetPath: 'assets/beards/b6.svg', position: {x: 25, y: 145}, size: {width: 320, height: 280}},
  {name: 'b7', assetPath: 'assets/beards/b7.svg', position: {x: 22, y: 190}, size: {width: 320, height: 280}},
  {name: 'b8', assetPath: 'assets/beards/b8.svg', position: {x: 22, y: 150}, size: {width: 320, height: 300}},
  {name: 'b9', assetPath: 'assets/beards/b9.svg', position: {x: 20, y: 170}, size: {width: 320, height: 300}},
  {name: 'none', assetPath: '', position: {x: 35, y: 25}, size: {width: 295, height: 240}},
];

export const HAIR_ITEMS = [
  {name: 'hair0', assetPath: 'assets/hairs/Hair0.svg', position: {x: 35, y: 25}, size: {width: 300, height: 240}},
  {name: 'hair1', assetPath: 'assets/hairs/Hair1.svg', position: {x: -65, y: -30}, size: {width: 500, height: 390}},
  {name: 'hair2', assetPath: 'assets/hairs/Hair2.svg', position: {x: 40, y: 20}, size: {width: 290, height: 280}},
  {name: 'hair3', assetPath: 'assets/hairs/Hair3.svg', position: {x: -60, y: -30}, size: {width: 600, height: 550}},
  {name: 'hair4', assetPath: 'assets/hairs/Hair4.svg', position: {x: 25, y: 0}, size: {width: 320, height: 280}},
  {name: 'hair5', assetPath: 'assets/hairs/Hair5.svg', position: {x: -97, y: -95}, size: {width: 550, height: 550}},
  {name: 'hair6', assetPath: 'assets/hairs/Hair6.svg', position: {x: -100, y: -80}, size: {width: 550, height: 550}},
  {name: 'hair7', assetPath: 'assets/hairs/Hair7.svg', position: {x: -90, y: -120}, size: {width: 550, height: 570}},
  {name: 'hair8', assetPath: 'assets/hairs/Hair8.svg', position: {x: -99, y: -160}, size: {width: 550, height: 560}},
  {name: 'hair9', assetPath: 'assets/hairs/Hair9.svg', position: {x: -95, y: -85}, size: {width: 550, height: 600}},
  {name: 'hair10', assetPath: 'assets/hairs/Hair10.svg', position: {x: -100, y: -10}, size: {width: 550, height: 570}},
  {name: 'hair11', assetPath: 'assets/hairs/Hair11.svg', position: {x: -115, y: 0}, size: {width: 600, height: 680}},
  {name: 'hair12', assetPath: 'assets/hairs/Hair12.svg', position: {x: -65, y: -30}, size: {width: 500, height: 680}},
  {name: 'hair13', assetPath: 'assets/hairs/Hair13.svg', position: {x: -70, y: -10}, size: {width: 500, height: 400}},
  {name: 'hair14', assetPath: 'assets/hairs/Hair14.svg', position: {x: -15, y: -10}, size: {width: 500, height: 630}},
  {name: 'hair15', assetPath: 'assets/hairs/Hair15.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair16', assetPath: 'assets/hairs/Hair16.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair17', assetPath: 'assets/hairs/Hair17.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair18', assetPath: 'assets/hairs/Hair18.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair19', assetPath: 'assets/hairs/Hair19.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair20', assetPath: 'assets/hairs/Hair20.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair21', assetPath: 'assets/hairs/Hair21.svg', position: {x: -115, y: 0}, size: {width: 600, height: 680}},
  {name: 'hair22', assetPath: 'assets/hairs/Hair22.svg', position: {x: -65, y: -30}, size: {width: 500, height: 680}},
  {name: 'hair23', assetPath: 'assets/hairs/Hair23.svg', position: {x: -70, y: -10}, size: {width: 500, height: 400}},
  {name: 'hair24', assetPath: 'assets/hairs/Hair24.svg', position: {x: -15, y: -10}, size: {width: 500, height: 630}},
  {name: 'hair25', assetPath: 'assets/hairs/Hair25.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair26', assetPath: 'assets/hairs/Hair26.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair27', assetPath: 'assets/hairs/Hair27.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair28', assetPath: 'assets/hairs/Hair28.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair29', assetPath: 'assets/hairs/Hair29.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair30', assetPath: 'assets/hairs/Hair30.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair31', assetPath: 'assets/hairs/Hair31.svg', position: {x: -115, y: 0}, size: {width: 600, height: 680}},
  {name: 'hair32', assetPath: 'assets/hairs/Hair32.svg', position: {x: -65, y: -30}, size: {width: 500, height: 680}},
  {name: 'hair33', assetPath: 'assets/hairs/Hair33.svg', position: {x: -70, y: -10}, size: {width: 500, height: 400}},
  {name: 'hair34', assetPath: 'assets/hairs/Hair34.svg', position: {x: -15, y: -10}, size: {width: 500, height: 630}},
  {name: 'hair35', assetPath: 'assets/hairs/Hair35.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair36', assetPath: 'assets/hairs/Hair36.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair37', assetPath: 'assets/hairs/Hair37.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair38', assetPath: 'assets/hairs/Hair38.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair39', assetPath: 'assets/hairs/Hair39.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair40', assetPath: 'assets/hairs/Hair40.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair41', assetPath: 'assets/hairs/Hair41.svg', position: {x: -115, y: 0}, size: {width: 600, height: 680}},
  {name: 'hair42', assetPath: 'assets/hairs/Hair42.svg', position: {x: -65, y: -30}, size: {width: 500, height: 680}},
  {name: 'hair43', assetPath: 'assets/hairs/Hair43.svg', position: {x: -70, y: -10}, size: {width: 500, height: 400}},
  {name: 'hair44', assetPath: 'assets/hairs/Hair44.svg', position: {x: -15, y: -10}, size: {width: 500, height: 630}},
  {name: 'hair45', assetPath: 'assets/hairs/Hair45.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair46', assetPath: 'assets/hairs/Hair46.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair47', assetPath: 'assets/hairs/Hair47.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair48', assetPath: 'assets/hairs/Hair48.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair49', assetPath: 'assets/hairs/Hair49.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair50', assetPath: 'assets/hairs/Hair50.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair51', assetPath: 'assets/hairs/Hair51.svg', position: {x: -115, y: 0}, size: {width: 600, height: 680}},
  {name: 'hair52', assetPath: 'assets/hairs/Hair52.svg', position: {x: -65, y: -30}, size: {width: 500, height: 680}},
  {name: 'hair53', assetPath: 'assets/hairs/Hair53.svg', position: {x: -70, y: -10}, size: {width: 500, height: 400}},
  {name: 'hair54', assetPath: 'assets/hairs/Hair54.svg', position: {x: -15, y: -10}, size: {width: 500, height: 630}},
  {name: 'hair55', assetPath: 'assets/hairs/Hair55.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair56', assetPath: 'assets/hairs/Hair56.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair57', assetPath: 'assets/hairs/Hair57.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair58', assetPath: 'assets/hairs/Hair58.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair59', assetPath: 'assets/hairs/Hair59.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair60', assetPath: 'assets/hairs/Hair60.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair61', assetPath: 'assets/hairs/Hair61.svg', position: {x: -115, y: 0}, size: {width: 600, height: 680}},
  {name: 'hair62', assetPath: 'assets/hairs/Hair62.svg', position: {x: -65, y: -30}, size: {width: 500, height: 680}},
  {name: 'hair63', assetPath: 'assets/hairs/Hair63.svg', position: {x: -70, y: -10}, size: {width: 500, height: 400}},
  {name: 'hair64', assetPath: 'assets/hairs/Hair64.svg', position: {x: -15, y: -10}, size: {width: 500, height: 630}},
  {name: 'hair65', assetPath: 'assets/hairs/Hair65.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair66', assetPath: 'assets/hairs/Hair66.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'none', assetPath: '', position: {x: 35, y: 25}, size: {width: 295, height: 240}},
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
    position: {x: -15, y: -15},
    size: {width: 400, height: 320},
  },
  {
    name: 'Access2',
    assetPath: 'assets/accessories/Access2.svg',
    position: {x: -35, y: 0},
    size: {width: 440, height: 440},
  },
  {
    name: 'Access3',
    assetPath: 'assets/accessories/Access3.svg',
    position: {x: 55, y: 85},
    size: {width: 260, height: 280},
  },
  {
    name: 'Access4',
    assetPath: 'assets/accessories/Access4.svg',
    position: {x: 43, y: 90},
    size: {width: 280, height: 280},
  },
  {name: 'none', assetPath: '', position: {x: 35, y: 25}, size: {width: 295, height: 240}},
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
