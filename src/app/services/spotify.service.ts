import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDNT6_bq_Islbr2y9ROdeac7U3lnB0oXg0dwyYs-Tv_Z3iIj3M8fGrXwOF5mY6FqIa0SJLM3mf7aORmghexj5BM8crEu9fB9fq4GirSec16iP1mZPT_e9fE_dtF8qjTezdoU4ftcQ'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

}
