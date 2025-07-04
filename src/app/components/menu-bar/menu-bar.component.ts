import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { Menubar } from 'primeng/menubar';


@Component({
  selector: 'app-menu-bar',
  imports: [Menubar, AvatarModule, RouterModule ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
      this.items = [
        {
          label: 'HOME',
          routerLink: '/'
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
