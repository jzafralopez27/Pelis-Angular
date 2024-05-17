import { Peli } from "@/model/peli.model";
import { PeliVm } from "./peli.vm";

export const mapPeliToVm = (peli: Peli): PeliVm => ({
    id: peli.id,
    name: peli.name,
    imageUrl: peli.poster ?? "",
    year: peli.year
});

export const mapVmToPeli = (peliVm: PeliVm): Peli => 
    new Peli(peliVm.id,peliVm.name,'',(peliVm.year),peliVm.imageUrl)