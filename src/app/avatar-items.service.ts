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
  Glass = 'GLASS',
  Hat = 'HAT',
  Headphone = 'HEADPHONE',
  Tie = 'TIE',
}

export const NONE_ITEM = {name: 'none', assetPath: '', position: {x: 0, y: 0}, size: {width: 0, height: 0}};

export const addNamesToItems = (items: Partial<AvatarItem>[]): AvatarItem[] => {
  return _.map(items, (item: AvatarItem) => {
    const name = _.first(_.split(_.last(_.split(item.assetPath, '/')), '.')) || 'none';
    return {...item, name};
  });
};

export const BEARD_ITEMS = addNamesToItems([
  {assetPath: 'assets/beards/Beards1.svg', position: {x: 0, y: 140}, size: {width: 370, height: 280}},
  {
    assetPath: 'assets/beards/Beards2.svg',
    position: {x: 11, y: 151},
    size: {width: 345, height: 353},
  },
  {assetPath: 'assets/beards/Beards3.svg', position: {x: 5, y: 105}, size: {width: 374, height: 328}},
  {assetPath: 'assets/beards/Beards4.svg', position: {x: 50, y: 200}, size: {width: 272, height: 164}},
  {assetPath: 'assets/beards/Beards5.svg', position: {x: 40, y: 165}, size: {width: 291, height: 204}},
  {assetPath: 'assets/beards/Beards6.svg', position: {x: 13, y: 155}, size: {width: 332, height: 300}},
  {assetPath: 'assets/beards/Beards8.svg', position: {x: 22, y: 135}, size: {width: 320, height: 300}},
  {assetPath: 'assets/beards/Beards9.svg', position: {x: 40, y: 170}, size: {width: 283, height: 300}},
  {assetPath: 'assets/beards/Beards10.svg', position: {x: 16, y: 140}, size: {width: 335, height: 300}},
  {assetPath: 'assets/beards/Beards11.svg', position: {x: 75, y: 170}, size: {width: 205, height: 300}},
  {assetPath: 'assets/beards/Beards12.svg', position: {x: 25, y: 135}, size: {width: 322, height: 279}},
  {assetPath: 'assets/beards/Beards13.svg', position: {x: 103, y: 240}, size: {width: 160, height: 172}},
  {assetPath: 'assets/beards/Beards14.svg', position: {x: 48, y: 135}, size: {width: 290, height: 279}},
  {assetPath: 'assets/beards/Beards15.svg', position: {x: 23, y: 160}, size: {width: 320, height: 300}},
  {assetPath: 'assets/beards/Beards16.svg', position: {x: 80, y: 235}, size: {width: 205, height: 172}},
  {assetPath: 'assets/beards/Beards17.svg', position: {x: 49, y: 140}, size: {width: 270, height: 286}},
  {assetPath: 'assets/beards/Beards18.svg', position: {x: 21, y: 160}, size: {width: 318, height: 286}},
  {assetPath: 'assets/beards/Beards19.svg', position: {x: 26, y: 175}, size: {width: 312, height: 300}},
  {assetPath: 'assets/beards/Beards20.svg', position: {x: 23, y: 135}, size: {width: 320, height: 300}},
  {assetPath: 'assets/beards/Beards21.svg', position: {x: 37, y: 135}, size: {width: 295, height: 300}},
  {assetPath: 'assets/beards/Beards22.svg', position: {x: 122, y: 286}, size: {width: 130, height: 89}},
  {assetPath: 'assets/beards/Beards23.svg', position: {x: 130, y: 270}, size: {width: 119, height: 87}},
  {assetPath: 'assets/beards/Beards24.svg', position: {x: 100, y: 170}, size: {width: 280, height: 168}},
  NONE_ITEM,
]);

export const HAIR_ITEMS = addNamesToItems([
  {name: 'hair0', assetPath: 'assets/hairs/Hair0.svg', position: {x: 35, y: 25}, size: {width: 300, height: 240}},
  {name: 'hair1', assetPath: 'assets/hairs/Hair1.svg', position: {x: -35, y: -70}, size: {width: 430, height: 390}},
  {name: 'hair2', assetPath: 'assets/hairs/Hair2.svg', position: {x: 35, y: 10}, size: {width: 300, height: 280}},
  {name: 'hair4', assetPath: 'assets/hairs/Hair4.svg', position: {x: -97, y: 13}, size: {width: 450, height: 400}},
  {name: 'hair5', assetPath: 'assets/hairs/Hair5.svg', position: {x: 42, y: -90}, size: {width: 517, height: 409}},
  {name: 'hair6', assetPath: 'assets/hairs/Hair6.svg', position: {x: -100, y: -80}, size: {width: 550, height: 550}},
  {name: 'hair7', assetPath: 'assets/hairs/Hair7.svg', position: {x: -90, y: -120}, size: {width: 550, height: 570}},
  {name: 'hair8', assetPath: 'assets/hairs/Hair8.svg', position: {x: -99, y: -160}, size: {width: 550, height: 560}},
  {name: 'hair9', assetPath: 'assets/hairs/Hair9.svg', position: {x: -95, y: -85}, size: {width: 550, height: 600}},
  {name: 'hair10', assetPath: 'assets/hairs/Hair10.svg', position: {x: -95, y: -60}, size: {width: 550, height: 660}},
  {name: 'hair11', assetPath: 'assets/hairs/Hair11.svg', position: {x: -170, y: -30}, size: {width: 700, height: 700}},
  {name: 'hair12', assetPath: 'assets/hairs/Hair12.svg', position: {x: -70, y: -30}, size: {width: 500, height: 710}},
  {name: 'hair13', assetPath: 'assets/hairs/Hair13.svg', position: {x: -70, y: -5}, size: {width: 500, height: 400}},
  {name: 'hair14', assetPath: 'assets/hairs/Hair14.svg', position: {x: -16, y: -38}, size: {width: 500, height: 670}},
  {name: 'hair15', assetPath: 'assets/hairs/Hair15.svg', position: {x: -1, y: -105}, size: {width: 370, height: 420}},
  {name: 'hair16', assetPath: 'assets/hairs/Hair16.svg', position: {x: -70, y: -75}, size: {width: 490, height: 500}},
  {name: 'hair17', assetPath: 'assets/hairs/Hair17.svg', position: {x: -45, y: -5}, size: {width: 450, height: 450}},
  {name: 'hair18', assetPath: 'assets/hairs/Hair18.svg', position: {x: -70, y: -15}, size: {width: 500, height: 596}},
  {name: 'hair19', assetPath: 'assets/hairs/Hair19.svg', position: {x: -90, y: -60}, size: {width: 522, height: 474}},
  {name: 'hair20', assetPath: 'assets/hairs/Hair20.svg', position: {x: -70, y: -50}, size: {width: 478, height: 697}},
  {name: 'hair21', assetPath: 'assets/hairs/Hair21.svg', position: {x: -65, y: -90}, size: {width: 478, height: 445}},
  {name: 'hair22', assetPath: 'assets/hairs/Hair22.svg', position: {x: -60, y: -100}, size: {width: 445, height: 478}},
  {name: 'hair23', assetPath: 'assets/hairs/Hair23.svg', position: {x: -70, y: -45}, size: {width: 478, height: 558}},
  {name: 'hair24', assetPath: 'assets/hairs/Hair24.svg', position: {x: -15, y: -55}, size: {width: 478, height: 678}},
  {name: 'hair25', assetPath: 'assets/hairs/Hair25.svg', position: {x: -109, y: -55}, size: {width: 577, height: 598}},
  {name: 'hair26', assetPath: 'assets/hairs/Hair26.svg', position: {x: -115, y: -60}, size: {width: 577, height: 598}},
  {name: 'hair27', assetPath: 'assets/hairs/Hair27.svg', position: {x: -120, y: -137}, size: {width: 577, height: 555}},
  {name: 'hair28', assetPath: 'assets/hairs/Hair28.svg', position: {x: -130, y: -175}, size: {width: 577, height: 590}},
  {name: 'hair29', assetPath: 'assets/hairs/Hair29.svg', position: {x: -72, y: -30}, size: {width: 517, height: 466}},
  {name: 'hair30', assetPath: 'assets/hairs/Hair30.svg', position: {x: -75, y: -80}, size: {width: 531, height: 390}},
  {name: 'hair31', assetPath: 'assets/hairs/Hair31.svg', position: {x: -80, y: -35}, size: {width: 517, height: 556}},
  {name: 'hair32', assetPath: 'assets/hairs/Hair32.svg', position: {x: -25, y: -70}, size: {width: 400, height: 400}},
  {name: 'hair33', assetPath: 'assets/hairs/Hair33.svg', position: {x: -75, y: -50}, size: {width: 517, height: 456}},
  {name: 'hair34', assetPath: 'assets/hairs/Hair34.svg', position: {x: 20, y: -20}, size: {width: 331, height: 314}},
  {name: 'hair35', assetPath: 'assets/hairs/Hair35.svg', position: {x: -20, y: -50}, size: {width: 430, height: 356}},
  {name: 'hair36', assetPath: 'assets/hairs/Hair36.svg', position: {x: 20, y: -50}, size: {width: 400, height: 370}},
  {name: 'hair38', assetPath: 'assets/hairs/Hair38.svg', position: {x: 10, y: -90}, size: {width: 370, height: 420}},
  {name: 'hair39', assetPath: 'assets/hairs/Hair39.svg', position: {x: -90, y: -40}, size: {width: 550, height: 573}},
  {name: 'hair40', assetPath: 'assets/hairs/Hair40.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair41', assetPath: 'assets/hairs/Hair41.svg', position: {x: 20, y: -30}, size: {width: 328, height: 301}},
  {name: 'hair42', assetPath: 'assets/hairs/Hair42.svg', position: {x: -5, y: -50}, size: {width: 370, height: 323}},
  {name: 'hair43', assetPath: 'assets/hairs/Hair43.svg', position: {x: -5, y: -40}, size: {width: 370, height: 323}},
  {name: 'hair44', assetPath: 'assets/hairs/Hair44.svg', position: {x: -5, y: -40}, size: {width: 370, height: 323}},
  {name: 'hair45', assetPath: 'assets/hairs/Hair45.svg', position: {x: 0, y: -35}, size: {width: 377, height: 520}},
  {name: 'hair46', assetPath: 'assets/hairs/Hair46.svg', position: {x: -5, y: 30}, size: {width: 360, height: 247}},
  {name: 'hair47', assetPath: 'assets/hairs/Hair47.svg', position: {x: 0, y: 80}, size: {width: 350, height: 177}},
  {name: 'hair48', assetPath: 'assets/hairs/Hair48.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair49', assetPath: 'assets/hairs/Hair49.svg', position: {x: 0, y: -100}, size: {width: 370, height: 420}},
  {name: 'hair50', assetPath: 'assets/hairs/Hair50.svg', position: {x: -10, y: -80}, size: {width: 380, height: 420}},
  {name: 'hair51', assetPath: 'assets/hairs/Hair51.svg', position: {x: 3, y: -50}, size: {width: 374, height: 328}},
  {name: 'hair52', assetPath: 'assets/hairs/Hair52.svg', position: {x: 12, y: -40}, size: {width: 360, height: 328}},
  {name: 'hair53', assetPath: 'assets/hairs/Hair53.svg', position: {x: 15, y: -15}, size: {width: 339, height: 297}},
  {name: 'hair54', assetPath: 'assets/hairs/Hair54.svg', position: {x: 15, y: -20}, size: {width: 333, height: 314}},
  {name: 'hair55', assetPath: 'assets/hairs/Hair55.svg', position: {x: 15, y: -90}, size: {width: 333, height: 420}},
  {name: 'hair56', assetPath: 'assets/hairs/Hair56.svg', position: {x: 0, y: -80}, size: {width: 357, height: 420}},
  {name: 'hair57', assetPath: 'assets/hairs/Hair57.svg', position: {x: 0, y: -75}, size: {width: 357, height: 420}},
  {name: 'hair58', assetPath: 'assets/hairs/Hair58.svg', position: {x: 5, y: -100}, size: {width: 357, height: 420}},
  {name: 'hair59', assetPath: 'assets/hairs/Hair59.svg', position: {x: 15, y: -100}, size: {width: 340, height: 420}},
  {name: 'hair60', assetPath: 'assets/hairs/Hair60.svg', position: {x: -70, y: -80}, size: {width: 517, height: 485}},
  {name: 'hair61', assetPath: 'assets/hairs/Hair61.svg', position: {x: -100, y: -60}, size: {width: 580, height: 606}},
  {name: 'hair62', assetPath: 'assets/hairs/Hair62.svg', position: {x: -168, y: -125}, size: {width: 598, height: 606}},
  {name: 'hair63', assetPath: 'assets/hairs/Hair63.svg', position: {x: -150, y: -120}, size: {width: 598, height: 606}},
  {name: 'hair64', assetPath: 'assets/hairs/Hair64.svg', position: {x: -120, y: -120}, size: {width: 598, height: 606}},
  {name: 'hair65', assetPath: 'assets/hairs/Hair65.svg', position: {x: -107, y: -100}, size: {width: 598, height: 606}},
  {name: 'hair66', assetPath: 'assets/hairs/Hair66.svg', position: {x: -110, y: -121}, size: {width: 598, height: 606}},
  NONE_ITEM,
]);

export const GLASS_ITEMS = addNamesToItems([
  {assetPath: 'assets/glasses/Glasses0.svg', position: {x: 44, y: 101}, size: {width: 293, height: 240}},
  {assetPath: 'assets/glasses/Glasses1.svg', position: {x: 36, y: 150}, size: {width: 300, height: 140}},
  {assetPath: 'assets/glasses/Glasses2.svg', position: {x: 36, y: 150}, size: {width: 300, height: 140}},
  {
    assetPath: 'assets/glasses/Glasses3.svg',
    position: {x: 36, y: 150},
    size: {width: 300, height: 140},
  },
  {
    assetPath: 'assets/glasses/Glasses4.svg',
    position: {x: 41, y: 145},
    size: {width: 300, height: 140},
  },
  {
    assetPath: 'assets/glasses/Glasses5.svg',
    position: {x: 41, y: 145},
    size: {width: 300, height: 140},
  },
  {
    assetPath: 'assets/glasses/Glasses6.svg',
    position: {x: 41, y: 145},
    size: {width: 300, height: 140},
  },
  {
    assetPath: 'assets/glasses/Glasses7.svg',
    position: {x: 20, y: 60},
    size: {width: 327, height: 303},
  },
  {
    assetPath: 'assets/glasses/Glasses8.svg',
    position: {x: 28, y: 60},
    size: {width: 326, height: 306},
  },
  {
    assetPath: 'assets/glasses/Glasses9.svg',
    position: {x: 28, y: 60},
    size: {width: 326, height: 306},
  },
  {
    assetPath: 'assets/glasses/Glasses10.svg',
    position: {x: 28, y: 60},
    size: {width: 326, height: 306},
  },
  {
    assetPath: 'assets/glasses/Glasses11.svg',
    position: {x: 36, y: 50},
    size: {width: 306, height: 213},
  },
  {
    assetPath: 'assets/glasses/Glasses12.svg',
    position: {x: 38, y: 140},
    size: {width: 306, height: 141},
  },
  {
    assetPath: 'assets/glasses/Glasses13.svg',
    position: {x: 38, y: 140},
    size: {width: 306, height: 141},
  },
  {
    assetPath: 'assets/glasses/Glasses14.svg',
    position: {x: 38, y: 140},
    size: {width: 306, height: 141},
  },
  {
    name: 'hair15',
    assetPath: 'assets/glasses/Glasses15.svg',
    position: {x: 52, y: 155},
    size: {width: 273, height: 106},
  },
  {
    assetPath: 'assets/glasses/Glasses16.svg',
    position: {x: 52, y: 155},
    size: {width: 273, height: 106},
  },
  {
    assetPath: 'assets/glasses/Glasses17.svg',
    position: {x: 52, y: 155},
    size: {width: 273, height: 106},
  },
  {
    assetPath: 'assets/glasses/Glasses18.svg',
    position: {x: 52, y: 155},
    size: {width: 273, height: 106},
  },
  {
    assetPath: 'assets/glasses/Glasses19.svg',
    position: {x: -5, y: 130},
    size: {width: 370, height: 155},
  },
  {
    assetPath: 'assets/glasses/Glasses20.svg',
    position: {x: -5, y: 130},
    size: {width: 370, height: 155},
  },
  {
    assetPath: 'assets/glasses/Glasses21.svg',
    position: {x: -5, y: 130},
    size: {width: 370, height: 155},
  },
  {
    assetPath: 'assets/glasses/Glasses22.svg',
    position: {x: 15, y: 125},
    size: {width: 335, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses23.svg',
    position: {x: 15, y: 125},
    size: {width: 335, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses24.svg',
    position: {x: 15, y: 125},
    size: {width: 335, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses25.svg',
    position: {x: 15, y: 125},
    size: {width: 335, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses26.svg',
    position: {x: 15, y: 125},
    size: {width: 335, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses27.svg',
    position: {x: 15, y: 125},
    size: {width: 335, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses28.svg',
    position: {x: 62, y: 130},
    size: {width: 255, height: 172},
  },
  {
    assetPath: 'assets/glasses/Glasses29.svg',
    position: {x: 15, y: 130},
    size: {width: 335, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses30.svg',
    position: {x: 52, y: 157},
    size: {width: 262, height: 111},
  },
  {
    assetPath: 'assets/glasses/Glasses31.svg',
    position: {x: 52, y: 162},
    size: {width: 274, height: 109},
  },
  {
    assetPath: 'assets/glasses/Glasses32.svg',
    position: {x: 52, y: 162},
    size: {width: 274, height: 109},
  },
  {
    assetPath: 'assets/glasses/Glasses33.svg',
    position: {x: 52, y: 162},
    size: {width: 274, height: 109},
  },
  {
    assetPath: 'assets/glasses/Glasses34.svg',
    position: {x: 59, y: 162},
    size: {width: 264, height: 102},
  },
  {
    assetPath: 'assets/glasses/Glasses35.svg',
    position: {x: 57, y: 162},
    size: {width: 264, height: 102},
  },
  {
    assetPath: 'assets/glasses/Glasses36.svg',
    position: {x: 35, y: 145},
    size: {width: 300, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses37.svg',
    position: {x: 40, y: 135},
    size: {width: 300, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses38.svg',
    position: {x: 40, y: 145},
    size: {width: 300, height: 150},
  },
  {
    assetPath: 'assets/glasses/Glasses39.svg',
    position: {x: 43, y: 150},
    size: {width: 295, height: 135},
  },
  {
    assetPath: 'assets/glasses/Glasses40.svg',
    position: {x: 43, y: 150},
    size: {width: 295, height: 135},
  },
  {
    assetPath: 'assets/glasses/Glasses41.svg',
    position: {x: 43, y: 150},
    size: {width: 295, height: 135},
  },
  {
    assetPath: 'assets/glasses/Glasses42.svg',
    position: {x: 36, y: 145},
    size: {width: 310, height: 140},
  },
  {
    assetPath: 'assets/glasses/Glasses43.svg',
    position: {x: 36, y: 145},
    size: {width: 310, height: 140},
  },
  {
    assetPath: 'assets/glasses/Glasses44.svg',
    position: {x: 36, y: 145},
    size: {width: 310, height: 140},
  },
  {
    assetPath: 'assets/glasses/Glasses45.svg',
    position: {x: 32, y: 150},
    size: {width: 310, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses46.svg',
    position: {x: 32, y: 150},
    size: {width: 310, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses47.svg',
    position: {x: 32, y: 150},
    size: {width: 310, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses48.svg',
    position: {x: 50, y: 150},
    size: {width: 270, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses49.svg',
    position: {x: 50, y: 152},
    size: {width: 270, height: 130},
  },
  {assetPath: 'assets/glasses/Glasses50.svg', position: {x: 50, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses51.svg', position: {x: 50, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses52.svg', position: {x: 50, y: 150}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses53.svg', position: {x: 50, y: 150}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses54.svg', position: {x: 50, y: 150}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses55.svg', position: {x: 50, y: 150}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses56.svg', position: {x: 50, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses57.svg', position: {x: 50, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses58.svg', position: {x: 50, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses59.svg', position: {x: 47, y: 152}, size: {width: 270, height: 130}},
  {
    assetPath: 'assets/glasses/Glasses60.svg',
    position: {x: 48, y: 152},
    size: {width: 270, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses61.svg',
    position: {x: 48, y: 152},
    size: {width: 270, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses62.svg',
    position: {x: 53, y: 152},
    size: {width: 270, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses63.svg',
    position: {x: 50, y: 152},
    size: {width: 270, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses64.svg',
    position: {x: 50, y: 152},
    size: {width: 270, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses65.svg',
    position: {x: 50, y: 152},
    size: {width: 270, height: 130},
  },
  {
    assetPath: 'assets/glasses/Glasses66.svg',
    position: {x: 52, y: 152},
    size: {width: 270, height: 130},
  },
  {assetPath: 'assets/glasses/Glasses67.svg', position: {x: 52, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses68.svg', position: {x: 52, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses69.svg', position: {x: 35, y: 163}, size: {width: 310, height: 123}},
  {assetPath: 'assets/glasses/Glasses70.svg', position: {x: 37, y: 163}, size: {width: 310, height: 123}},
  {assetPath: 'assets/glasses/Glasses71.svg', position: {x: 29, y: 163}, size: {width: 310, height: 123}},
  {assetPath: 'assets/glasses/Glasses72.svg', position: {x: 50, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses73.svg', position: {x: 50, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses74.svg', position: {x: 50, y: 152}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses75.svg', position: {x: 50, y: 155}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses76.svg', position: {x: 50, y: 155}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses77.svg', position: {x: 50, y: 155}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses78.svg', position: {x: 50, y: 155}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses79.svg', position: {x: 50, y: 155}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses80.svg', position: {x: 50, y: 155}, size: {width: 270, height: 130}},
  {assetPath: 'assets/glasses/Glasses81.svg', position: {x: 59, y: 150}, size: {width: 270, height: 130}},
]);

export const HAT_ITEMS = addNamesToItems([
  {assetPath: 'assets/hats/Hat1.svg', position: {x: -100, y: -140}, size: {width: 577, height: 598}},
  {assetPath: 'assets/hats/Hat2.svg', position: {x: -10, y: -157}, size: {width: 320, height: 363}},
  {
    assetPath: 'assets/hats/Hat3.svg',
    position: {x: 65, y: -74},
    size: {width: 237, height: 141},
  },
  {
    assetPath: 'assets/hats/Hat4.svg',
    position: {x: 65, y: -55},
    size: {width: 237, height: 141},
  },
  {
    assetPath: 'assets/hats/Hat5.svg',
    position: {x: -133, y: -220},
    size: {width: 639, height: 409},
  },
  {
    assetPath: 'assets/hats/Hat6.svg',
    position: {x: -69, y: -94},
    size: {width: 502, height: 287},
  },
  {
    assetPath: 'assets/hats/Hat7.svg',
    position: {x: 20, y: -130},
    size: {width: 400, height: 328},
  },
  {
    assetPath: 'assets/hats/Hat8.svg',
    position: {x: -60, y: -190},
    size: {width: 504, height: 328},
  },
  {
    assetPath: 'assets/hats/Hat9.svg',
    position: {x: 25, y: -165},
    size: {width: 321, height: 328},
  },
  {
    assetPath: 'assets/hats/Hat10.svg',
    position: {x: 50, y: -90},
    size: {width: 400, height: 323},
  },
  {
    assetPath: 'assets/hats/Hat11.svg',
    position: {x: 110, y: -180},
    size: {width: 260, height: 360},
  },
  {
    assetPath: 'assets/hats/Hat12.svg',
    position: {x: -20, y: -135},
    size: {width: 400, height: 285},
  },
  {
    assetPath: 'assets/hats/Hat13.svg',
    position: {x: -20, y: -150},
    size: {width: 260, height: 285},
  },
  {
    assetPath: 'assets/hats/Hat14.svg',
    position: {x: -30, y: -90},
    size: {width: 436, height: 285},
  },
  {
    name: 'hair15',
    assetPath: 'assets/hats/Hat15.svg',
    position: {x: -32, y: -130},
    size: {width: 430, height: 316},
  },
  {
    assetPath: 'assets/hats/Hat16.svg',
    position: {x: -10, y: -125},
    size: {width: 390, height: 316},
  },
  {
    assetPath: 'assets/hats/Hat17.svg',
    position: {x: -13, y: -180},
    size: {width: 400, height: 348},
  },
  {
    assetPath: 'assets/hats/Hat18.svg',
    position: {x: -22, y: -160},
    size: {width: 416, height: 348},
  },
  {
    assetPath: 'assets/hats/Hat19.svg',
    position: {x: -20, y: -160},
    size: {width: 416, height: 348},
  },
  {
    assetPath: 'assets/hats/Hat20.svg',
    position: {x: 25, y: -50},
    size: {width: 306, height: 206},
  },
  {
    assetPath: 'assets/hats/Hat21.svg',
    position: {x: 35, y: -130},
    size: {width: 300, height: 248},
  },
  {
    assetPath: 'assets/hats/Hat22.svg',
    position: {x: -25, y: -80},
    size: {width: 422, height: 248},
  },
  {
    assetPath: 'assets/hats/Hat23.svg',
    position: {x: -25, y: -80},
    size: {width: 422, height: 248},
  },
  {
    assetPath: 'assets/hats/Hat24.svg',
    position: {x: -25, y: -80},
    size: {width: 422, height: 248},
  },
  {
    assetPath: 'assets/hats/Hat25.svg',
    position: {x: -25, y: -80},
    size: {width: 422, height: 248},
  },
  {
    assetPath: 'assets/hats/Hat26.svg',
    position: {x: -20, y: -210},
    size: {width: 422, height: 445},
  },
  {
    assetPath: 'assets/hats/Hat27.svg',
    position: {x: 90, y: -80},
    size: {width: 184, height: 159},
  },
  {
    assetPath: 'assets/hats/Hat28.svg',
    position: {x: 57, y: -10},
    size: {width: 250, height: 159},
  },
  {
    assetPath: 'assets/hats/Hat29.svg',
    position: {x: 120, y: -40},
    size: {width: 250, height: 159},
  },
  {
    assetPath: 'assets/hats/Hat30.svg',
    position: {x: -15, y: -140},
    size: {width: 361, height: 287},
  },
  {
    assetPath: 'assets/hats/Hat31.svg',
    position: {x: 55, y: -5},
    size: {width: 250, height: 196},
  },
  {
    assetPath: 'assets/hats/Hat32.svg',
    position: {x: 48, y: -56},
    size: {width: 273, height: 236},
  },
  {
    assetPath: 'assets/hats/Hat33.svg',
    position: {x: 47, y: -131},
    size: {width: 273, height: 304},
  },
  {
    assetPath: 'assets/hats/Hat34.svg',
    position: {x: 5, y: -140},
    size: {width: 350, height: 312},
  },
  {
    assetPath: 'assets/hats/Hat35.svg',
    position: {x: -32, y: -101},
    size: {width: 450, height: 312},
  },
  {
    assetPath: 'assets/hats/Hat36.svg',
    position: {x: 3, y: -163},
    size: {width: 368, height: 430},
  },
  {
    assetPath: 'assets/hats/Hat37.svg',
    position: {x: -10, y: -110},
    size: {width: 234, height: 240},
  },
  {
    assetPath: 'assets/hats/Hat38.svg',
    position: {x: -10, y: -110},
    size: {width: 234, height: 240},
  },
  {
    assetPath: 'assets/hats/Hat39.svg',
    position: {x: -10, y: -110},
    size: {width: 234, height: 240},
  },
  {
    assetPath: 'assets/hats/Hat40.svg',
    position: {x: -10, y: -110},
    size: {width: 234, height: 240},
  },
  {
    assetPath: 'assets/hats/Hat41.svg',
    position: {x: -10, y: -110},
    size: {width: 234, height: 240},
  },
  NONE_ITEM,
]);

export const HEADPHONE_ITEMS = addNamesToItems([
  {assetPath: 'assets/headphones/Headphones1.svg', position: {x: 0, y: 140}, size: {width: 370, height: 280}},
  {
    assetPath: 'assets/headphones/Headphones2.svg',
    position: {x: 11, y: 151},
    size: {width: 345, height: 353},
  },
  {assetPath: 'assets/headphones/Headphones3.svg', position: {x: 5, y: 105}, size: {width: 374, height: 328}},
  {assetPath: 'assets/headphones/Headphones4.svg', position: {x: 50, y: 200}, size: {width: 272, height: 164}},
  {assetPath: 'assets/headphones/Headphones5.svg', position: {x: 40, y: 165}, size: {width: 291, height: 204}},
  {assetPath: 'assets/headphones/Headphones6.svg', position: {x: 13, y: 155}, size: {width: 332, height: 300}},
  {assetPath: 'assets/headphones/Headphones8.svg', position: {x: 22, y: 135}, size: {width: 320, height: 300}},
  {assetPath: 'assets/headphones/Headphones9.svg', position: {x: 40, y: 170}, size: {width: 283, height: 300}},
  {assetPath: 'assets/headphones/Headphones10.svg', position: {x: 16, y: 140}, size: {width: 335, height: 300}},
  NONE_ITEM,
]);

export const TIE_ITEMS = addNamesToItems([
  {assetPath: 'assets/ties/Ties1.svg', position: {x: 0, y: 140}, size: {width: 370, height: 280}},
  {
    assetPath: 'assets/ties/Ties2.svg',
    position: {x: 11, y: 151},
    size: {width: 345, height: 353},
  },
  {assetPath: 'assets/ties/Ties3.svg', position: {x: 5, y: 105}, size: {width: 374, height: 328}},
  {assetPath: 'assets/ties/Ties4.svg', position: {x: 50, y: 200}, size: {width: 272, height: 164}},
  NONE_ITEM,
]);

@Injectable({
  providedIn: 'root',
})
export class AvatarItemsService {
  constructor() {}
}
