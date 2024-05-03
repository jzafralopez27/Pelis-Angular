import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Peli } from '../model/peli.model';
import { Cinema } from '../model/cinema.model';


@Component({
  selector: 'app-card-peli',
  standalone: true,
  imports: [CardPeliComponent],
  templateUrl: './card-peli.component.html',
  styleUrls: ['./card-peli.component.css']
})
export class CardPeliComponent {
@Input() peli! : Peli;
@Output() showCinemaList = new EventEmitter<Cinema[]>();


onTitleClick(){
  this.showCinemaList.emit(this.peli.cinemas)
}
}
