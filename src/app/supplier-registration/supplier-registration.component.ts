import { MapsAPILoader } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CityService } from '../city/city.service';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-supplier-registration',
  templateUrl: './supplier-registration.component.html',
  styleUrls: ['./supplier-registration.component.css']
})
export class SupplierRegistrationComponent implements OnInit {

  

  ngOnInit(): void {
  }
  supplierName: string;
  location: string;
  email: string;
  password: string;
  confirmPassword: string;
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
  // cities: string[] = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo', 'Anuradhapura']; // Add more cities as needed
  lat: number;
  lng: number;
  selectedCity: string;
  constructor(private http: HttpClient,private mapsAPILoader: MapsAPILoader,private cityService: CityService,private supplierService: SupplierService) {}
  
  
  // onSubmit() {
  //   const formData = {
  //     supplierName: this.supplierName,
  //     location: this.location,
  //     email: this.email,
  //     password: this.password,
  //     confirmPassword: this.confirmPassword
  //   };
  // }
  onSubmit() {
    const formData = {
      supplierName: this.supplierName,
      // location: this.selectedCity, // You can pass the city name if needed
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      lat: this.lat, // Include latitude
      lng: this.lng // Include longitude
    };
    // Call the register service to send the form data to the backend
    this.supplierService.registerSupplier(formData).subscribe(
      response => {
        // Handle response from the backend if needed
        console.log('Registration successful', response);
      },
      error => {
        // Handle error response from the backend if needed
        console.error('Registration failed', error);
      }
    );
  }
// onLocationChange() {
//     // Call geocodeLocation with the selected city
//     this.geocodeLocation(this.selectedCity);
// }
onLocationChange() {
  const { lat, lng } = this.cityService.getLatLong(this.selectedCity);
  if (lat !== null && lng !== null) {
    this.lat = lat;
    this.lng = lng;
  } else {
    console.error('Invalid city selected');
  }
}
}
