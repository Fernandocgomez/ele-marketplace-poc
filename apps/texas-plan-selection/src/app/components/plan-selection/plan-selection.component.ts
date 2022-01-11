import { Component } from '@angular/core';

@Component({
    selector: 'ele-marketplace-plan-selection',
    template: `
        <div id="plans-container" class="container">
            <div class="row mt-4">
                <div class="col-md-3">
                    <ele-marketplace-estimated-monthly-usage-filter></ele-marketplace-estimated-monthly-usage-filter>
                </div>
                <div class="col-md-9">
                    <ele-marketplace-plan-card></ele-marketplace-plan-card>
                    <ele-marketplace-plan-card></ele-marketplace-plan-card>
                    <ele-marketplace-plan-card></ele-marketplace-plan-card>
                    <ele-marketplace-plan-card></ele-marketplace-plan-card>
                    <ele-marketplace-plan-card></ele-marketplace-plan-card>
                </div>
            </div>
        </div>

    `,
    styles: []
  })
  export class PlanSelectionComponent {
    
  }
  
  