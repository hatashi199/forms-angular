import { NgModule } from '@angular/core';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorsPageComponent } from './pages/selectors-page/selectors-page.component';

@NgModule({
	declarations: [
		BasicPageComponent,
		DynamicPageComponent,
		SwitchesPageComponent,
  SelectorsPageComponent
	],
	imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule]
})
export class ReactiveModule {}
