import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from './unit.model'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder, private http: HttpClient) {
    this.myForm = fb.group({
      'id': [],
      'nome_comune': [],
      'altezza': [],
      'periodo': [],
      'note': [],
      'famiglia': [],
      'scient': [],
      'colore': [],
      'url' : []
    });

  }
  ngOnInit() {
  }
  onSubmit(value: HTMLInputElement): void {
    console.log('you submitted value: ', value);
    let headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    this.http.post('https://3000-df44bb37-6a60-4711-be13-afe3454e531e.ws-eu01.gitpod.io/users/inserisci', JSON.stringify(value), headers);

  }

  addUnit(newID: HTMLInputElement): boolean {
    console.log("BAU");
    let newData: Unit = new Unit();
    newData.ID = Number(newID.value);

    let headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    this.http.post('https://3000-df44bb37-6a60-4711-be13-afe3454e531e.ws-eu01.gitpod.io/users/inserisci', JSON.stringify(newData), headers).
    subscribe(data=>console.log(data));
    return false;
  }
}
