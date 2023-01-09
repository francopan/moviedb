import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menuItems } from 'src/app/constants/menu-items.constant';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  public readonly items: Array<MenuItem> = menuItems;
}
