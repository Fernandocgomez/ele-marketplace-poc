import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadService } from './services/lead.service';

@NgModule({
  imports: [CommonModule],
})
export class LeadModule {
  static forRoot(): ModuleWithProviders<LeadModule> {
    return {
      ngModule: LeadModule,
      providers: [
        {provide: LeadService}
      ]
    }
  }
}
