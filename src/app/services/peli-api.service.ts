import { Injectable } from '@angular/core';
import { Peli } from '../model/peli.model';

@Injectable({
  providedIn: 'root'
})
export class PeliApiService {

  constructor() { }

  getAll(): Promise<Peli[]>{
    return Promise.resolve([
      new Peli('Blade Runner', "Denis Villeneuve", "1982", 'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/bladerunner.png'),
      new Peli('Interstellar', "Christopher Nolan", "2014", 'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/interstellar.png'),
    ]);
  }
}
