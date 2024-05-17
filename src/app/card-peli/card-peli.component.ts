import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Peli } from '@/model/peli.model';
import { Cinema } from '@/model/cinema.model';
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-peli',
  standalone: true,
  imports: [CardPeliComponent, CommonModule],
  templateUrl: './card-peli.component.html',
  styleUrls: ['./card-peli.component.css'],
})

export class CardPeliComponent {
@Input() peli!: Peli;
@Output() showCinemaList = new EventEmitter<Cinema[]>();

constructor (private router: Router){
}

onTitleClick(){
  this.showCinemaList.emit(this.peli.cinemas);
}

handleImageClick(){
  this.router.navigate(['/edit',this.peli.id])
}
}
