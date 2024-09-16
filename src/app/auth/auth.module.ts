import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [RegisterPageComponent],
	imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule]
})
export class AuthModule {}
