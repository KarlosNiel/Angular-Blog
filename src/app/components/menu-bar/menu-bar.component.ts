import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';

import { Menubar } from 'primeng/menubar';


@Component({
  selector: 'app-menu-bar',
  imports: [Menubar, AvatarModule, InputTextModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
      this.items = [
        {
          label: 'HOME',
        },
        {
          label: 'BLOG',
        },
        {
          label: 'BOOKMARKS'
        },
        {
          label: 'UI KIT'
        }
      ]
    }
}
