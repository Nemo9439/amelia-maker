import {Component, OnInit} from '@angular/core';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  constructor(public avatarService: AvatarService) {}

  ngOnInit() {}
}
