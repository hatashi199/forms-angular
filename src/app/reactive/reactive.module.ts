import { NgModule } from '@angular/core';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		BasicPageComponent,
		DynamicPageComponent,
		SwitchesPageComponent
	],
	imports: [CommonModule, ReactiveRoutingModule]
})
export class ReactiveModule {}
