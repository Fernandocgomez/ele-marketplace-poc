// Angular Modules.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryResolver } from 'libs/resolvers/src/lib/entry.resolver';
import { AppComponent } from './app.component';
import { PlanSelectionComponent } from './components/plan-selection/plan-selection.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: PlanSelectionComponent,
		resolve: {
			entry: EntryResolver
		}
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
