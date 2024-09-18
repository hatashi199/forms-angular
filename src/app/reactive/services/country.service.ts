import { Injectable } from '@angular/core';
import { Region } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
	private _regions: Region[] = [
		Region.Africa,
		Region.Americas,
		Region.Asia,
		Region.Europe,
		Region.Oceania
	];

	constructor() {}

	get getRegions(): Region[] {
		return [...this._regions];
	}
}
