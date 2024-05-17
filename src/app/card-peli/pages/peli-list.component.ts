import { Component } from '@angular/core';
import { Peli } from '@/model/peli.model';
import { Cinema } from '@/model/cinema.model';
import { PeliApiService } from '../../services/peli-api.service';

@Component({
  selector: 'app-peli-list',
  templateUrl: '../pages/peli-list.component.html',
  styleUrl: '../pages/peli-list.component.css'
})
export class PeliListComponent {
  protected pelis : Peli[];
  showCinemaList: boolean = false;
  cinemas: Cinema[];

  constructor(private peliApiService: PeliApiService ){
    this.pelis = []
    this.cinemas = []
  }

  loadPelis = async() => {
this.peliApiService.getAll().subscribe({
  next: (pelis) => (this.pelis = pelis),
  error: (error) => console.log(error),
});
  
  }

  ngOnInit() : void{
    this.loadPelis();
  }

  onShowCinemaList(cinemas: Cinema[]){
    this.showCinemaList = true;
    this.cinemas = cinemas;
  }

  onCloseCinemaList(){
    this.showCinemaList = false;
  }
}