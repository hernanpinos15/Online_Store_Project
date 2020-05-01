import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

const  routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterOutlet
  ]
})
export class HomeRoutingModule{

}

