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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
