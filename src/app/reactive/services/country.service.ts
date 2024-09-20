import { Injectable } from '@angular/core';
import { Country, Region } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountryService {
	private _regions: Region[] = [
		Region.Africa,
		Region.Americas,
		Region.Asia,
		Region.Europe,
		Region.Oceania
	];

	constructor(private http: HttpClient) {}

	get getRegions(): Region[] {
		return [...this._regions];
	}

	getCountriesByContinent(continent: Region): Observable<Country[]> {
		if (!continent) return of([]);
		return this.http
			.get<
				Country[]
			>(`https://restcountries.com/v3.1/region/${continent}`)
			.pipe(tap((res) => console.log(res)));
	}

	getBordersByCountry(alphaCode: string): Observable<Country[]> {
		if (!alphaCode) return of();
		return this.http
			.get<Country[]>(`https://restcountries.com/v3.1/alpha/${alphaCode}`)
			.pipe(tap((res) => console.log(res)));
	}
}
