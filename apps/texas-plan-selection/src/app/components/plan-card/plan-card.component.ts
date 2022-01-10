import { Component, Input } from '@angular/core';
import { Plan } from '../../models/plan';

@Component({
  selector: 'ele-marketplace-plan-card',
  template: `
    <div class="card mb-4">
      <h5 class="card-header">{{ plan.title }}</h5>
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <img [attr.src]="plan.imgSrc" height="80px" width="80px">
            <h5 class="card-title mb-0 ps-2">{{ plan.name }}</h5>
          </div>
          <div class="d-flex flex-column align-items-end justify-content-center">
            <h5 class="mb-0 text">{{ plan.price }}</h5>
            <p class="mb-0"><span class="fw-bold">Call Now: </span><a class="mb-0" [attr.href]="'tel:'+plan.phoneNumber">{{ plan.phoneNumber }}</a></p>
          </div>
        </div>
        <p class="card-text">{{ plan.description }}</p>
        <a [attr.href]="plan.url" class="btn btn-primary float-end fw-bold">Select Plan</a>
      </div>
    </div>
  `,
  styles: []
})
export class PlanCardComponent {
  @Input() plan: Plan = new Plan();
}

