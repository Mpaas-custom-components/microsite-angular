import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BreakdownCategoryComponent } from './pages/breakdown-category/breakdown-category.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title:'Home'
  },
  {
    path: 'breakdown',
    component: BreakdownCategoryComponent,
    title:'Breakdown Category'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
