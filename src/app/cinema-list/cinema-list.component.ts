import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Peli } from '../model/peli.model';
import { Cinema } from '../model/cinema.model';
import { PeliApiService } from '../services/peli-api.service'

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrl: './cinema-list.component.css'
})

export class CinemaListComponent {
  protected pelis: Peli[];
  showCinemaList: boolean = true;

  constructor() {
    this.pelis = [
      new Peli(1,'Blade Runner', "Denis Villeneuve",1980, 'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/bladerunner.png', [{
        id: 1,
        name: 'Yelmo Cines',
        sitsAvailable: true
      }]),

      new Peli(2,'Interstellar', "Christopher Nolan",2014, 'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/interstellar.png', [{
        id: 2,
        name: 'Cines Pepito',
        sitsAvailable: false
      }
      ]),
    ];
    
    this.cinemas = [];
  }

  ngOnInit(): void {
  }

  onShowCinemaList(cinemas: Cinema[]) {
    this.showCinemaList = true;
  }

  @Output() close = new EventEmitter();
  @Input() cinemas: Cinema[];
  
  onCloseClick(){
    this.close.emit();
  }
}
