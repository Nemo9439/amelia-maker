import {AvatarItemsService, ItemCategory, AvatarItem} from './avatar-items.service';
import {Component} from '@angular/core';
import {AvatarService} from './avatar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'amelia-generator';
  ItemCategory = ItemCategory;
  constructor(public avatarService: AvatarService, public avatarItemsService: AvatarItemsService) {}

  onItemSelected(avaterItem: AvatarItem, category: ItemCategory) {
    
  }
}
