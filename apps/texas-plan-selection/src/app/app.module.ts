import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { EstimatedMonthlyUsageFilterComponent } from './components/estimated-monthly-usage-filter/estimated-monthly-usage-filter.component';

@NgModule({
  declarations: [AppComponent, PlanCardComponent, EstimatedMonthlyUsageFilterComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
