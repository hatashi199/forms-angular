import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'reactive-basic-page',
	templateUrl: './basic-page.component.html',
	styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {
	// public basicForm: FormGroup = new FormGroup({
	// 	product: new FormControl<string>('', { nonNullable: true }),
	// 	price: new FormControl<number>(0, { nonNullable: true }),
	// 	stock: new FormControl<number>(0, { nonNullable: true })
	// });

	public basicForm: FormGroup = this.fb.group({
		product: ['', [Validators.required, Validators.minLength(3)]],
		price: [0, [Validators.required, Validators.min(0)]],
		stock: [0, [Validators.required, Validators.min(0)]]
	});

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.basicForm.reset({
			product: '',
			price: 0,
			stock: 0
		});
	}

	onSave(): void {
		if (this.basicForm.invalid) return;
		console.log(this.basicForm.value);
		this.basicForm.reset({ price: 0, stock: 0 });
	}
}
