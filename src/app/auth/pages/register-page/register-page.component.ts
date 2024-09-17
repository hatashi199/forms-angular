import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
	selector: 'auth-register-page',
	templateUrl: './register-page.component.html',
	styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
	public registerForm: FormGroup = this.fb.group(
		{
			name: [
				'',
				[
					Validators.required,
					Validators.minLength(3),
					Validators.pattern(
						this.validatorsService.getFirstNameAndLastnamePattern
					)
				]
			],
			email: [
				'',
				[
					Validators.required,
					Validators.pattern(this.validatorsService.getEmailPattern)
				],
				[this.emailValidatorService]
			],
			username: [
				'',
				[
					Validators.required,
					Validators.minLength(3),
					this.validatorsService.cantBeStrider
				]
			],
			password: ['', [Validators.required, Validators.minLength(6)]],
			repeatPass: ['', [Validators.required, Validators.minLength(6)]]
		},
		{
			validators: [
				this.validatorsService.isSameValueField(
					'password',
					'repeatPass'
				)
			]
		}
	);

	constructor(
		private fb: FormBuilder,
		private validatorsService: ValidatorsService,
		private emailValidatorService: EmailValidatorService
	) {}

	isValidField(field: string) {
		return this.validatorsService.isValidField(field, this.registerForm);
	}

	getErrorsField(field: string) {
		return this.validatorsService.getFieldError(field, this.registerForm);
	}

	onSave(): void {
		if (this.registerForm.invalid) {
			this.registerForm.markAllAsTouched();
			return;
		}

		console.log(this.registerForm.value);
		this.registerForm.reset();
	}
}
