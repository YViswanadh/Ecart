import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Getter for form controls
  get f() {
    return this.contactForm.controls;
  }

  // Handle form submission
  onSubmit() {
    this.submitted = true;

    // Stop if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // Handle form submission logic here
    console.log('Form submitted:', this.contactForm.value);
    alert('Message sent successfully!');
  }

}
