import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AvatarItem} from '../avatar-items.service';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent implements OnInit {
  @Input() items: AvatarItem[];
  @Output() selectItemEv: EventEmitter<AvatarItem> = new EventEmitter<AvatarItem>();

  constructor() {}

  ngOnInit() {
    console.log(this.items);
  }

  getImageUrl(item) {
    return {'background-image': `url(${item.assetPath})`};
  }

  selectItem(item: AvatarItem) {
    this.selectItemEv.emit(item);
  }
}
