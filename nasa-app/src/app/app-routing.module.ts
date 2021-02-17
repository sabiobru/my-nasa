import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NasaIndexComponent } from './pages/nasa-index/nasa-index.component';
import { NeowsComponent } from './pages/neows/neows.component';

const routes: Routes = [
  {
    path: '',
    component: NasaIndexComponent
  },
  {
    path: 'index',
    component: NasaIndexComponent
  },
  {
    path: 'neo',
    component: NeowsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
