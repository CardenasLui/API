import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiUrl = 'https://api.chucknorris.io/jokes/categories';

  constructor(private http: HttpClient) {
  }
  getlist(): Observable<any> {
    return this.http.get(`${this.apiUrl}?`)
  }
}