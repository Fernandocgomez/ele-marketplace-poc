import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { LeadService } from 'libs/lead/src/lib/services/lead.service';

@Injectable()
export class EntryResolver implements Resolve<boolean> {

  constructor(
    private cookieService: CookieService,
    private leadService: LeadService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const cookieExists: boolean = this.cookieService.check('esLeadId');

    if(cookieExists) {
      this.leadService.lead = this.leadService.getLead(this.cookieService.get('esLeadId'));
      return of(true);
    } else {
      const newLead$ = this.leadService.createLead();
      newLead$.subscribe((lead) => {
        this.cookieService.set('esLeadId', `${lead.id}`);
        this.leadService.lead = newLead$;
      })
      return of(true);
    }
  }
}
