import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BreakdownCategoryComponent } from './pages/breakdown-category/breakdown-category.component';
import { SliderComponent } from './components/slider/slider.component';
import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TopbarComponent,
    HomeComponent,
    BreakdownCategoryComponent,
    SliderComponent,
    TransactionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
