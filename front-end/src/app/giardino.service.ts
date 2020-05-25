import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Fiore } from './fiore.model';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class GiardinoService {

  constructor(private http: HttpClient) { }

  getFiore(id: string) {
    const url = `${environment.urlServer}/users/fiore/${id}`;
    const headers = new HttpHeaders({Authorization: environment.urlServer});

    return this.http.get(url, { headers });
  }

}
