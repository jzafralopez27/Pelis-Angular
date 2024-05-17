import { Peli } from "@/model/peli.model"

export const peliMockCollection = [
    new Peli(1,'Blade Runner', "Denis Villeneuve", 1980, 'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/bladerunner.png', [{
        id: 1,
        name: 'Yelmo Cines',
        sitsAvailable: true
      }]),

      new Peli(2,'Interstellar', "Christopher Nolan", 2014, 'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/interstellar.png', [{
        id: 2,
        name: 'Cines Pepito',
        sitsAvailable: false
      }
      ]),
]

// todo esto NO lo coge porque es el mock no? ahora ya coge el de la api "real"