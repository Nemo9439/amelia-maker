import {Component} from '@angular/core';
import {AvatarService} from './avatar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'amelia-generator';
  constructor(public avatarService: AvatarService) {}
}
