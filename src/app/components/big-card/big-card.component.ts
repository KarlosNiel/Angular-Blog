
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-big-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover:string = '';
  @Input()
  cardTitle:string = '';
  @Input()
  cardDescription:string = '';
  @Input()
  Id:string = '0';

}
