import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { EstimatedMonthlyUsageFilterComponent } from './components/estimated-monthly-usage-filter/estimated-monthly-usage-filter.component';
import { ResolversModule } from '@ele-marketplace/resolvers';
import { AppRoutingModule } from './app-routing.module';
import { PlanSelectionComponent } from './components/plan-selection/plan-selection.component';
import { LeadModule } from '@ele-marketplace/lead';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PlanCardComponent, EstimatedMonthlyUsageFilterComponent, PlanSelectionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeadModule.forRoot(),
    ResolversModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
