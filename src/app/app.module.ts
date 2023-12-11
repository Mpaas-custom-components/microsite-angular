import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToggleTabsComponent } from './components/toggle-tabs/toggle-tabs.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';


import { BreakdownCategoryComponent } from './pages/breakdown-category/breakdown-category.component';
import { SliderComponent } from './components/slider/slider.component';
import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { PengeluaranComponent } from './components/pengeluaran/pengeluaran.component';
import { PemasukanComponent } from './components/pemasukan/pemasukan.component';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TopbarComponent,
    HomeComponent,
    ToggleTabsComponent,
    CardCategoryComponent,
    PieChartComponent,
    BreakdownCategoryComponent,
    SliderComponent,
    TransactionCardComponent,
    PengeluaranComponent,
    PemasukanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
