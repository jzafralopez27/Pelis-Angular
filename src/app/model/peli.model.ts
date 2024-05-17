import { Cinema } from "./cinema.model";

export class Peli {
    id: number;
    name: string;
    director: string;
    year: number;
    poster?: string;
    cinemas?: Cinema[]

    constructor(id: number, name: string, director: string, year: number, imageUrl?: string, cinemas?: Cinema[]) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.year = year;
        this.poster = imageUrl;
        this.cinemas = cinemas;
    }

}