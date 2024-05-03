import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Peli } from '../app/model/peli.model';
import {CommonModule} from '@angular/common';
import { CardPeliComponent } from './card-peli/card-peli.component';
import { Cinema } from './model/cinema.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, CommonModule {
  title = 'game-catalog';
  protected pelis : Peli[];
  showCinemaList: boolean = true;

  constructor(){
    this.pelis = [
      new Peli('Blade Runner', "Denis Villeneuve", "1982", 'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/bladerunner.png', [{
        id: 1,
        name: 'Yelmo Cines',
        sitsAvailable: true
      }]),

      new Peli('Interstellar', "Christopher Nolan", "2014", 'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/interstellar.png', [{
        id: 2,
        name: 'Cines Pepito',
        sitsAvailable: false
        }
      ]),
    ];
  }


  ngOnInit() : void{
  }

  onShowCinemaList(cinemas: Cinema[]){
    this.showCinemaList = true;
  }
}
