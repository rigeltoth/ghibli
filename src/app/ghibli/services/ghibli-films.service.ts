import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmsGhibliModel } from '../models/films-ghibli.model';

@Injectable({
  providedIn: 'root'
})
export class GhibliFilmsService {

  url_ghibli_films = 'https://ghibliapi.herokuapp.com/films'
  constructor(private http: HttpClient) { }

  getFilms(){
    return this.http.get<FilmsGhibliModel[]>(this.url_ghibli_films)
  }
}
