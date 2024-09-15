import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { confirmPasswordValidator } from './confirm-password.validator'; // Adjust path as needed

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$')
      ]],
      confirmPassword: ['', Validators.required],
      addresses: this.fb.array([this.createAddressFormGroup()]), // FormArray for addresses
    }, { validators: confirmPasswordValidator() });
  }

  // Method to create a new address form group
  createAddressFormGroup(): FormGroup {
    return this.fb.group({
      address: ['', Validators.required],
      street: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  // Get the FormArray of addresses
  get addresses(): FormArray {
    return this.registerForm.get('addresses') as FormArray;
  }

  // Add a new address to the FormArray
  addAddress(): void {
    this.addresses.push(this.createAddressFormGroup());
  }

  // Remove an address from the FormArray
  removeAddress(index: number): void {
    if (this.addresses.length > 1) {
      this.addresses.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
