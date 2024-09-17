import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
	private firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
	private emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

	get getEmailPattern(): string {
		return this.emailPattern;
	}
	get getFirstNameAndLastnamePattern(): string {
		return this.firstNameAndLastnamePattern;
	}

	public cantBeStrider = (control: FormControl): ValidationErrors | null => {
		const value: string = control.value.trim().toLowerCase();

		if (value === 'strider') {
			return {
				noStrider: true
			};
		}

		return null;
	};

	isValidField(field: string, form: FormGroup): boolean | null {
		return form.controls[field].errors && form.controls[field].touched;
	}

	getFieldError(field: string, form: FormGroup): string | null {
		if (!form.controls[field]) return null;

		const errors = form.controls[field].errors || {};

		for (const key of Object.keys(errors)) {
			switch (key) {
				case 'required':
					return 'Este campo es requerido';
				case 'minlength':
					return `Mínimo escribe ${errors['minlength'].requiredLength} letras`;
				case 'min':
					return 'Los números no pueden ser negativos';
				case 'emailTaken':
					return 'El email escrito ya está seleccionado';
				case 'notEqual':
					return 'Las contraseñas deben coincidir';
				default:
					return '';
			}
		}

		return '';
	}

	isSameValueField(field1: string, field2: string) {
		return (formGroup: FormGroup): ValidationErrors | null => {
			const fieldValue1 = formGroup.get(field1)?.value;
			const fieldValue2 = formGroup.get(field2)?.value;

			if (fieldValue1 !== fieldValue2) {
				formGroup.get(field2)?.setErrors({ notEqual: true });
				return { notEqual: true };
			}

			formGroup.get(field2)?.setErrors(null);
			return null;
		};
	}
}
