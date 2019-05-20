import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl;
@Injectable()
export class ServerService {
  constructor(private http: HttpClient) { }

  // API for doctor GetFilms
  GetFilms(url) {
    return this.http.get(url);
   }

}
