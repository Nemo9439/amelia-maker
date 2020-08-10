import {Injectable} from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class AvatarItemsService {
  constructor() {}

  // head = [{}]
}
