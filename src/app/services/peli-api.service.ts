import { Injectable } from '@angular/core';
import { Peli } from '../model/peli.model';
import { peliMockCollection } from './peli-api.mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeliApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Peli[]>{
  return this.http.get<Peli[]>('http://localhost:3001/movies')
  }

  Edit(peli: Peli): Observable<Peli> {
    return this.http.put<Peli>('http://localhost:3001/movies', peli)
  }

  // Edit(peli: Peli): Observable<Peli> {
  // return this.http.put<Peli>('./api/pelis', peli)
  // } sé que se puede poner así también
}
