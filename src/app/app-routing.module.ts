import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BreakdownCategoryComponent } from './pages/breakdown-category/breakdown-category.component';
import { PengeluaranComponent } from './components/pengeluaran/pengeluaran.component';
import { PemasukanComponent } from './components/pemasukan/pemasukan.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      { path: 'pengeluaran',
       component: PengeluaranComponent },
       { path: 'pemasukan',
       component: PemasukanComponent }

    ]
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
