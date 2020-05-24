import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fiore } from '../fiore.model';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
  }

  addFiore(newID: HTMLInputElement, newNome: HTMLInputElement, newAltezza: HTMLInputElement, newPeriodo: HTMLInputElement, newNote: HTMLInputElement, newColore: HTMLInputElement, newUrl: HTMLInputElement, newFamiglia: HTMLInputElement, newScient: HTMLInputElement): boolean {

    let newData: Fiore = new Fiore();
    newData.ID = Number(newID.value);
    newData.Nome_Comune = newNome.value;
    newData.Altezza = newAltezza.value;
    newData.Colore = newColore.value;
    newData.Periodo_Fioritura = newPeriodo.value;
    newData.Note = newNote.value;
    newData.URL_Immagine = newUrl.value;
    newData.Famiglia_Appartenenza = newFamiglia.value;
    newData.Nome_Scientifico = newScient.value;

    let headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    this.http.post(`${environment.urlServer}/users/inserisci`, JSON.stringify(newData), headers).
      subscribe(data => console.log(data));
    return false;
  }
}
