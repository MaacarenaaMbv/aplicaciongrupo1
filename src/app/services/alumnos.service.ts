import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  public url!: string;
  constructor(private _http: HttpClient) {
    this.url = environment.urlApiEjemplos;
  }

  getAlumnos(id: number): Observable<any> {
    var request = "api/alumnos/filtrarcurso/" + id;
    return this._http.get(this.url + request);
  }
}
