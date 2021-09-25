import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './clients/client/client.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'client', component: ClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
