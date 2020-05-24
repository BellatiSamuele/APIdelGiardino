import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fiore } from '../fiore.model';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  obsUnit: Observable<Fiore[]>;
  data: Fiore[];
  constructor(private http: HttpClient) { }
  getLista(): void {

    this.obsUnit = this.http.get<Fiore[]>(`${environment.urlServer}/users/fiori`);

    this.obsUnit.subscribe((data: Fiore[]) => {this.data = data;});
  }
  ngOnInit(): void {
    this.getLista();
  }
}
