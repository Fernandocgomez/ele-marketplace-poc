import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { EstimatedMonthlyUsageFilterComponent } from './components/estimated-monthly-usage-filter/estimated-monthly-usage-filter.component';
import { FormlyLibModule } from './../../../../libs/formly-lib/src/lib/formly-lib.module';

@NgModule({
  declarations: [AppComponent, PlanCardComponent, EstimatedMonthlyUsageFilterComponent],
  imports: [
    BrowserModule,
    FormlyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
