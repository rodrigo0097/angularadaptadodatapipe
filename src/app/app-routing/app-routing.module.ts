import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {ListarIteracionComponent} from '../iteracion/listar-iteracion/listar-iteracion.component';
import {IteracionDetailComponent}  from '../iteracion/iteracion-detail/iteracion-detail.component';
const routes: Routes = [

  
  {
    path: 'iteracion',
    children: [{
      path: 'list',
      component: ListarIteracionComponent
    },
    {
      path: ':id',
      component: IteracionDetailComponent,
      outlet: 'detail'
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
    ], 
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }