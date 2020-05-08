import { Component, OnInit } from '@angular/core';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup
} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  myForm: FormGroup;  //Dichiara una variabile di tipo FormGroup
  constructor(fb: FormBuilder) { //Il costruttore riceve come parametro il From Builder

    /*Diciamo al FormBuilder di creare un FormGroup che conterrà un FormControl
     *Chiamato sku, con valore di default ABC123 */
    this.myForm = fb.group({
      'nome': ['ABC123'],
      'colore': ['abc']
    });
  }
  ngOnInit() {
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}



