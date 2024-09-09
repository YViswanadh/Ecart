import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter for form controls
  get f() {
    return this.signupForm.controls;
  }

  // Handle form submission
  onSubmit() {
    this.submitted = true;

    // Stop if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    // Handle signup logic here
    alert('Signup successful!');
  }
}
