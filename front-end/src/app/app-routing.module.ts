import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { FioreComponent } from './fiore/fiore.component';

const routes: Routes = [
  { path: 'inserisci', component: FormComponent },
  { path: 'fiori', component: ListaComponent },
  { path: 'fiore/:ID', component: FioreComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
