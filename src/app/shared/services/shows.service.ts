import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IShowItem } from '../interfaces/show-item';
import { catchError } from 'rxjs/operators';
import { ICastItem } from '../interfaces/cast-item';
import { ISeasonItem } from '../interfaces/season-item';
import { IEpisodeItem } from '../interfaces/episode-item';
import { IScheduleItem } from '../interfaces/schedule-item';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  lastVisitedFilms = localStorage.getItem('lastVisited');

  constructor(private http: HttpClient) {
    if (!this.lastVisitedFilms) {
      localStorage.setItem('lastVisited', JSON.stringify([]));
    }
  }

  private showsUrl = 'https://api.tvmaze.com/shows';

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getShows(): Observable<IShowItem[]> {
    return this.http.get<IShowItem[]>(this.showsUrl).pipe(
      catchError(this.handleError<IShowItem[]>('getShows', []))
    );
  }

  getShow(id: number): Observable<IShowItem> {
    const url = `${this.showsUrl}/${id}`;
    return this.http.get<IShowItem>(url).pipe(
      catchError(this.handleError<IShowItem>(`getShow id=${id}`))
    );
  }

  getCast(id: number): Observable<ICastItem[]> {
    const url = `${this.showsUrl}/${id}/cast`;
    return this.http.get<ICastItem[]>(url).pipe(
      catchError(this.handleError<ICastItem[]>(`getCast id=${id}`))
    );
  }

  getSeasons(id: number): Observable<ISeasonItem[]> {
    const url = `${this.showsUrl}/${id}/seasons`;
    return this.http.get<ISeasonItem[]>(url).pipe(
      catchError(this.handleError<ISeasonItem[]>(`getSeasons id=${id}`))
    );
  }

  getSeasonEpisodes(id: number): Observable<IEpisodeItem[]> {
    const url = `https://api.tvmaze.com/seasons/${id}/episodes`;
    return this.http.get<IEpisodeItem[]>(url).pipe(
      catchError(this.handleError<IEpisodeItem[]>(`getSeasonEpisodes id=${id}`))
    );
  }

  getEpisodeDetail(id: number): Observable<IEpisodeItem> {
    const url = `https://api.tvmaze.com/episodes/${id}`;
    return this.http.get<IEpisodeItem>(url).pipe(
      catchError(this.handleError<IEpisodeItem>(`getEpisodeDetail id=${id}`))
    );
  }

  getSchedule(country: string, date: string): Observable<IScheduleItem[]> {
    const url = `https://api.tvmaze.com/schedule?country=${country}&date=${date}`;
    return this.http.get<IScheduleItem[]>(url).pipe(
      catchError(this.handleError<IScheduleItem[]>(`getSchedule country=${country}`))
    );
  }

  addLastVisitedFilm(show: IShowItem): Observable<IShowItem> {
    const lastVisited: IShowItem[] = JSON.parse(localStorage.getItem('lastVisited'));

    const existLastVisitedFilm = lastVisited.findIndex((savedShow: IShowItem) => savedShow.id === show.id);
    if (existLastVisitedFilm >= 0) {
      lastVisited.splice(existLastVisitedFilm, 1);
    }

    lastVisited.unshift(show);

    if (lastVisited.length > 6) {
      lastVisited.pop();
    }
    localStorage.setItem('lastVisited', JSON.stringify(lastVisited));
    return of(show);
  }

  getLastVisitedFilms(): Observable<IShowItem[]> {
    const lastVisitedFilms = JSON.parse(localStorage.getItem('lastVisited'));
    return of(lastVisitedFilms);
  }

  searchFilm(query): Observable<IShowItem[]> {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    return this.http.get<IShowItem[]>(url).pipe(
      catchError(this.handleError<IShowItem[]>(`searchFilm query=${query}`))
    );
  }
}
