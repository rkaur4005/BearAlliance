import { Component, OnInit } from '@angular/core';
import { ServerService } from '../servies/server.service';
import { formatDate } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  characters: any = [];
  getFilmData: any = {};
  showFilm: boolean;
  constructor(  private serverService: ServerService, private spinner: NgxSpinnerService,) {

    this.showFilm = false;
    this.characters = [
        {
          'name': 'Luke Skywalker',
          'url': 'https://swapi.co/api/people/1/'
        },
        {
          'name': 'Darth Vader',
          'url': 'https://swapi.co/api/people/4/'
        },
        {
          'name': 'Obi-wan Kenobi',
          'url': 'https://swapi.co/api/people/unknown/'
        }, 
        {
          'name': 'R2-D2',
          'url': 'https://swapi.co/api/people/3/'
        }
      ];
  }

  ngOnInit() {
  }

  slectFilm(url) {
    this.spinner.show();
    this.showFilm = false;
    this.serverService.GetFilms (url)
    .subscribe(
      response => {
        this.showFilm = true;
        this.getFilmData = response;
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
      });

  }
}
