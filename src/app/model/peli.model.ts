import { Cinema } from "./cinema.model";

export class Peli {
    name: string;
    director: string;
    dateRelease: Date;
    imageUrl?: string;
    cinemas?: Cinema[]

    constructor(name: string, director: string, dateRelease: string = "", imageUrl?: string, cinemas?: Cinema[]) {
        this.name = name;
        this.director = director;
        this.dateRelease = new Date(dateRelease);
        this.imageUrl = imageUrl;
        this.cinemas = cinemas;
    }

    getYearsFromRelease(): number {
        const milliseconds = Date.now() - this.dateRelease.getTime();
        return this.convertToYears(new Date(milliseconds))
    }
    
    private convertToYears = (date: Date): number =>
        Math.abs(date.getUTCFullYear() - 1970)
}