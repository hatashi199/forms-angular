import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [SideMenuComponent],
	imports: [CommonModule, RouterModule],
	exports: [SideMenuComponent]
})
export class SharedModule {}
