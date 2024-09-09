import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [RegisterPageComponent],
	imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
