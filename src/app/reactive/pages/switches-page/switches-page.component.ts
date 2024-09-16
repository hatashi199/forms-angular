import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'reactive-switches-page',
	templateUrl: './switches-page.component.html',
	styleUrl: './switches-page.component.css'
})
export class SwitchesPageComponent implements OnInit {
	public switchesForm: FormGroup = this.fb.group({
		gender: ['', [Validators.required]],
		wantNotifications: [true, [Validators.required]],
		termAndConditions: [false, [Validators.requiredTrue]]
	});

	public person = {
		gender: 'M',
		wantNotifications: false
	};

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.switchesForm.reset(this.person);
	}

	isValidField(field: string): boolean | null {
		return (
			this.switchesForm.controls[field].errors &&
			this.switchesForm.controls[field].touched
		);
	}

	getFieldError(field: string): string | null {
		if (!this.switchesForm.controls[field]) return null;

		const errors = this.switchesForm.controls[field].errors || {};

		for (const key of Object.keys(errors)) {
			switch (key) {
				case 'required':
					return 'Este campo es requerido';
				case 'minlength':
					return `Mínimo escribe ${errors['minlength'].requiredLength} letras`;
				case 'min':
					return 'Los números no pueden ser negativos';
				default:
					return '';
			}
		}

		return '';
	}

	onSave(): void {
		if (!this.switchesForm.valid) {
			this.switchesForm.markAllAsTouched();
			return;
		}

		const { termAndConditions, ...newPerson } = this.switchesForm.value;
		this.person = newPerson;
		console.log(this.switchesForm.value);
		this.switchesForm.reset({
			wantNotifications: false
		});
	}
}
