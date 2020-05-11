import { Component, OnInit } from '@angular/core';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  myForm: FormGroup;  //Dichiara una variabile di tipo FormGroup
  constructor(fb: FormBuilder,private http:HttpClient) { //Il costruttore riceve come parametro il From Builder

    /*Diciamo al FormBuilder di creare un FormGroup che conterrà un FormControl
     *Chiamato sku, con valore di default ABC123 */
    this.myForm = fb.group({
      'id': ['123'],
      'nome_comune': ['abc'],
      'altezza': ['abc'],
      'periodo': ['abc'],
      'note': ['abc'],
      'famiglia': ['abc'],
      'scient': ['abc']
    });
  }
  ngOnInit() {
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    let headers = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    this.http.post('https://3000-a0a65d53-ab3e-4aab-97e1-0a738189b07d.ws-eu01.gitpod.io/users/inserisci',(value),headers);

  }
}
