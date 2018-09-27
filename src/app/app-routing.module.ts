import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ApiComponent } from './api/api.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: '', redirectTo:'list', pathMatch:'full'},
  {path: 'api', component:ApiComponent},
  {path: 'list', component:ListComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
