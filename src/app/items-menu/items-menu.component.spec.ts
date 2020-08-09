import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsMenuComponent } from './items-menu.component';

describe('ItemsMenuComponent', () => {
  let component: ItemsMenuComponent;
  let fixture: ComponentFixture<ItemsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
