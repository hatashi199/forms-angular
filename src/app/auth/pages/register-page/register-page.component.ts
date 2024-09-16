import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../../shared/validators/validators';

@Component({
	selector: 'auth-register-page',
	templateUrl: './register-page.component.html',
	styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
	public registerForm: FormGroup = this.fb.group({
		name: ['', [Validators.required, Validators.minLength(3)]],
		email: ['', [Validators.required, Validators.email]],
		username: [
			'',
			[Validators.required, Validators.minLength(3), cantBeStrider]
		],
		password: ['', [Validators.required, Validators.minLength(6)]],
		repeatPass: ['', [Validators.required, Validators.minLength(6)]]
	});

	constructor(private fb: FormBuilder) {}

	onSave(): void {
		if (this.registerForm.invalid) {
			this.registerForm.markAllAsTouched();
			return;
		}

		console.log(this.registerForm.value);
		this.registerForm.reset();
	}
}
