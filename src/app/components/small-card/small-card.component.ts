import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [CardModule, ButtonModule, RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover:string = '';
  @Input()
  cardDate:string = '';
  @Input()
  cardDescription:string = '';
  @Input()
  Id:string = '0';


}
