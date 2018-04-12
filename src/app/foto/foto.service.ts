import { Injectable } from '@angular/core';
import {Photo} from '../shared/Photo';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FotoService {


  constructor(private http: HttpClient) { }


  getPhotos(): Observable<Photo[]> {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    return this.http.get<Photo[]>(url);
  }

  getPhotosAlbum(idAlbum: number): Observable<Photo[]> {
    let url = 'https://jsonplaceholder.typicode.com/photos?albumId=';
    return this.http.get<Photo[]>(url + `${idAlbum}`);
  }

}
