import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
	validate(
		control: FormControl
	): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		const email = control.value;

		const httpCallObservable = new Observable<ValidationErrors | null>(
			(subscriber) => {
				console.log(email);
				if (email === 'alejandro@ejemplo.es') {
					subscriber.next({ emailTaken: true });
					subscriber.complete();
					return;
				}
				subscriber.next(null);
				subscriber.complete();
			}
		).pipe(delay(3000));

		return httpCallObservable;
	}
}

// VALIDACION DE UN EMAIL CON UN BACKEND
// return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`).pipe(
//     map(res => {
//         return (res.length === 0) ? null : {emailTaken: true}
//     })
// )
