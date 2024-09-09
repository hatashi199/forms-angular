import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () =>
			import('./auth/auth.module').then((m) => m.AuthModule)
	},
	{
		path: 'reactive',
		loadChildren: () =>
			import('./reactive/reactive.module').then((m) => m.ReactiveModule)
	},
	{
		path: '',
		redirectTo: 'auth',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'auth'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
