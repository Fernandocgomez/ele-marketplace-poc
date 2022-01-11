import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryResolver } from './entry.resolver';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [CommonModule],
  providers: [
    CookieService
  ]
})
export class ResolversModule {
  static forRoot(): ModuleWithProviders<ResolversModule> {
    return {
      ngModule: ResolversModule,
      providers: [
        {provide: EntryResolver}
      ]
    }
  }
}
