import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {   //Importare le funzionalità nella nostra applicazione
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListaComponent } from './lista/lista.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FioreComponent } from './fiore/fiore.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaComponent,
    FioreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
