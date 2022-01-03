import { Component, OnInit } from '@angular/core';
import { FilmsGhibliModel } from 'src/app/ghibli/models/films-ghibli.model';
import { GhibliFilmsService } from 'src/app/ghibli/services/ghibli-films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.sass']
})
export class FilmListComponent implements OnInit {

  ghibliFilms: FilmsGhibliModel[] = []
  constructor(public ghibliFilmsService: GhibliFilmsService) { }

  ngOnInit(): void {
    this.getFilms()
  }

  getFilms(){
    this.ghibliFilmsService.getFilms().subscribe(
      res => {this.ghibliFilms = res},
      err => console.error(err)
    )
  }
}
