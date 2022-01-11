import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LeadService } from 'libs/lead/src/lib/services/lead.service';
import { CookieService } from 'ngx-cookie-service';


class Plan {
    readonly id: string = '';
    readonly title: string = '';
    readonly imgSrc: string = '';
    readonly price: string = '';
    readonly name: string = '';
    readonly phoneNumber: string = '';
    readonly description: string = '';
    readonly url: string = '';
}

interface Lead {
    id: string;

    [key: string]: any;
}
@Component({
    selector: 'ele-marketplace-plan-selection',
    template: `
        <div id="plans-container" class="container">
            <div class="row mt-4">
                <div class="col-md-3">
                    <ele-marketplace-estimated-monthly-usage-filter></ele-marketplace-estimated-monthly-usage-filter>
                </div>
                <div class="col-md-9" *ngIf="plans">
                    <ele-marketplace-plan-card 
                        *ngFor="let plan of plans | async" 
                        [plan]="plan"
                        (clickPlan)="selectPlan($event)"
                    ></ele-marketplace-plan-card>
                </div>
            </div>
        </div>

    `,
    styles: []
  })
  export class PlanSelectionComponent implements OnInit {

    plans?: Observable<any>;
    lead?: Lead;

    constructor(private http: HttpClient, private leadService: LeadService) {}

    ngOnInit(): void {
        this.plans = this.http.get('http://localhost:3333/api/plans');
        this.leadService.lead$.subscribe((lead) => {
            this.lead = lead;
            console.log(this.lead);
        })
    }

    selectPlan(plan: Plan) {
        if(this.lead) {
            this.lead['plan'] = plan;
            this.leadService.updateLead(this.lead).subscribe((lead) => {
                this.lead = lead;
            });
        }
    }
  }
  
  