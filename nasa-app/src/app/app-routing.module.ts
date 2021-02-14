import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaIndexComponent } from './pages/nasa-index/nasa-index.component';

const routes: Routes = [
  {
    path: '',
    component: NasaIndexComponent
  },
  {
    path: 'index',
    component: NasaIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
