import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableContainerComponent } from './table-container/table-container.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
