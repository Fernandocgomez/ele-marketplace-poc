import { Component } from '@angular/core';

@Component({
  selector: 'ele-marketplace-estimated-monthly-usage-filter',
  template: `
    <div class="card text-center p-3">
      <h5>Estimated Monthly Usage</h5>
      <h5>1000 kWh</h5>
      <div class="row align-items-center justify-content-between">
        <div class="col-4">
          <div>500</div>
          <img src="https://sales.energysavings.com/assets/img/500-kwh-icon.svg" height="50px" width="50px">
        </div>
        <div class="col-4">
          <div>1000</div>
          <img src="https://sales.energysavings.com/assets/img/1000-kwh-icon.svg" height="50px" width="50px">
        </div>
        <div class="col-4">
          <div>2000</div>
          <img src="https://sales.energysavings.com/assets/img/2000-kwh-icon.svg" height="50px" width="50px">
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class EstimatedMonthlyUsageFilterComponent {}
