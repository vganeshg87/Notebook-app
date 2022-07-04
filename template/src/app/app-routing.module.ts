import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotebookComponent } from './pages/notebook/notebook.component';

const routes: Routes = [

   {path: "" , component: MainLayoutComponent , children:[
        { path: '', component: NotebookComponent },
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
