import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { RegisterService } from '../service/register.service';
import { CityService } from '../city/city.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css'],

})
export class RegistreComponent {

  registrationForm: FormGroup;
  lat: number;
  lng: number;
  selectedCity: string;
  cities: string[] = [
    'Colombo', 
    'Kandy', 
    'Galle', 
    'Jaffna', 
    'Negombo', 
    'Anuradhapura', 
    'Mount Lavinia', 
    'Kesbewa', 
    'Maharagama', 
    'Moratuwa', 
    'Ratnapura', 
    'Sri Jayewardenepura Kotte', 
    'Kalmunai', 
    'Trincomalee', 
    'Athurugiriya', 
    'Weligama', 
    'Matara', 
    'Kolonnawa', 
    'Gampaha', 
    'Puttalam', 
    'Badulla', 
    'Kalutara', 
    'Bentota', 
    'Mannar', 
    'Kurunegala'
  ];
  
  constructor(private formBuilder: FormBuilder, private RegisterService: RegisterService,private cityService:CityService) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selectedCity: ['', Validators.required],
      lat: [null], // Initializing with null value, it will be updated later
      lng: [null], // Initializing with null value, it will be updated later
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.registrationForm.patchValue({
        selectedCity: this.selectedCity,
        lat: this.lat,
        lng: this.lng
      });
      if (this.registrationForm.valid) {
        this.RegisterService.register(this.registrationForm.value)
          .subscribe({
            next: response => {
              console.log('Registration successful:', response);
              this.registrationForm.reset();
            },
            error: error => {
              console.error('Registration failed:', error);
            }
          });
      }
      else {
        // Mark all form fields as touched to trigger validation messages
        this.registrationForm.markAllAsTouched();
      }
    }
  }
  // 
  onLocationChange(selectedCity: string) {
    this.selectedCity = selectedCity;
    const { lat, lng } = this.cityService.getLatLong(selectedCity);
    if (lat !== null && lng !== null) {
      this.lat = lat;
      this.lng = lng;
  
      // Update the form control values
      this.registrationForm.patchValue({
        selectedCity: selectedCity,
        lat: lat,
        lng: lng
      });
    } else {
      console.error('Invalid city selected');
    }
  }
  
  
}

