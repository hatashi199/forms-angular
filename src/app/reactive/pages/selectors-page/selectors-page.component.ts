import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/country.interface';

@Component({
	selector: 'app-selectors-page',
	templateUrl: './selectors-page.component.html',
	styleUrl: './selectors-page.component.css'
})
export class SelectorsPageComponent {
	public selectorForm: FormGroup = this.fb.group({
		continent: ['', Validators.required],
		country: ['', Validators.required],
		borders: ['', Validators.required]
	});

	constructor(
		private fb: FormBuilder,
		private countryService: CountryService
	) {}

	get regions(): Region[] {
		return this.countryService.getRegions;
	}
}
