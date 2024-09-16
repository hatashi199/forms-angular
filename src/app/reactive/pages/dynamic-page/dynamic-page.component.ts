import { Component } from '@angular/core';
import {
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-dynamic-page',
	templateUrl: './dynamic-page.component.html',
	styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {
	// public dynamicForm = new FormGroup({
	// 	addFav: new FormArray([])
	// });

	public dynamicForm: FormGroup = this.fb.group({
		name: ['', [Validators.required, Validators.minLength(3)]],
		favGames: this.fb.array([
			['Dragon Ball Sparking Zero', Validators.required],
			['GTA VI', Validators.required]
		])
	});
	public newFav: FormControl = new FormControl('', Validators.required);

	constructor(private fb: FormBuilder) {}

	get favGames() {
		return this.dynamicForm.get('favGames') as FormArray;
	}

	isValidField(field: string): boolean | null {
		return (
			this.dynamicForm.controls[field].errors &&
			this.dynamicForm.controls[field].touched
		);
	}

	getFieldError(field: string): string | null {
		if (!this.dynamicForm.controls[field]) return null;

		const errors = this.dynamicForm.controls[field].errors || {};

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

	isValidFieldArray(formArray: FormArray, index: number) {
		return (
			formArray.controls[index].errors &&
			formArray.controls[index].touched
		);
	}

	onAddToFavs() {
		if (this.newFav.invalid) return;
		const newGame = this.newFav.value;

		// this.favGames.push(new FormControl(newGame, Validators.required))
		this.favGames.push(this.fb.control(newGame, Validators.required));
		this.newFav.reset();
	}

	onDeleteFav(index: number): void {
		this.favGames.removeAt(index);
	}

	onSave(): void {
		if (this.dynamicForm.invalid) {
			this.dynamicForm.markAllAsTouched();
			return;
		}
		console.log(this.dynamicForm.value);
		(this.dynamicForm.controls['favGames'] as FormArray) = this.fb.array(
			[]
		);
		this.dynamicForm.reset();
	}
}
