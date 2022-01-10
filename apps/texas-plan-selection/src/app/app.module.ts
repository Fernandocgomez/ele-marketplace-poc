import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { EstimatedMonthlyUsageFilterComponent } from './components/estimated-monthly-usage-filter/estimated-monthly-usage-filter.component';
import { FormlyLibModule } from '@ele-marketplace/formly-lib';
import { LeadModule } from '@ele-marketplace/lead';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PlanCardComponent, EstimatedMonthlyUsageFilterComponent],
  imports: [
    BrowserModule,
    FormlyLibModule,
    LeadModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
