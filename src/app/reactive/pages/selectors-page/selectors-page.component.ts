import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country, Region } from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
	selector: 'app-selectors-page',
	templateUrl: './selectors-page.component.html',
	styleUrl: './selectors-page.component.css'
})
export class SelectorsPageComponent implements OnInit {
	public selectorForm: FormGroup = this.fb.group({
		continent: ['', Validators.required],
		country: ['', Validators.required],
		borders: ['', Validators.required]
	});
	public countriesByRegion: Country[] = [];
	public bordersByCountries: string[] = [];

	constructor(
		private fb: FormBuilder,
		private countryService: CountryService
	) {}

	ngOnInit(): void {
		this.onContinentChange();
	}

	get regions(): Region[] {
		return this.countryService.getRegions;
	}

	onContinentChange(): void {
		this.selectorForm
			.get('continent')
			?.valueChanges.pipe(
				tap(() => this.selectorForm.controls['country'].setValue('')),
				switchMap(
					(
						continent // El switchMap recibe la data de un observabble para devolversela a otro Observable.
					) => this.countryService.getCountriesByContinent(continent)
				)
			)
			.subscribe((countries) => (this.countriesByRegion = countries));
	}

	onCountryChange(): void {
		this.selectorForm
			.get('country')
			?.valueChanges.pipe(
				tap(() => this.selectorForm.controls['borders'].setValue('')),
				filter((value: string) => value.length > 0), // El filter si retorna un true continua con lo siguiente, si recibe un false para el código ahí.
				switchMap((alphaCode) =>
					this.countryService.getBordersByCountry(alphaCode)
				)
			)
			.subscribe((borders) => {
				if (!borders.borders) {
					this.bordersByCountries = [];
					return;
				}

				this.bordersByCountries = borders.borders;
			});
	}
}
