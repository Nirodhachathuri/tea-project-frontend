// city.service.ts
import { Injectable } from '@angular/core';
import { City } from './city.interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  // Define city data as an array of City objects
  cities: City[] = [
    { name: 'Colombo', lat: 6.9344, lng: 79.8428 },
    { name: 'Mount Lavinia', lat: 6.8731, lng: 79.8758 },
    { name: 'Kesbewa', lat: 6.7953, lng: 79.9386 },
    { name: 'Maharagama', lat: 6.8494, lng: 79.9236 },
    { name: 'Moratuwa', lat: 6.7991, lng: 79.8767 },
    { name: 'Ratnapura', lat: 6.6806, lng: 80.4022 },
    { name: 'Negombo', lat: 7.2111, lng: 79.8386 },
    { name: 'Kandy', lat: 7.2964, lng: 80.635 },
    { name: 'Sri Jayewardenepura Kotte', lat: 6.9108, lng: 79.8878 },
    { name: 'Kalmunai', lat: 7.4167, lng: 81.8167 },
    { name: 'Trincomalee', lat: 8.5667, lng: 81.2333 },
    { name: 'Galle', lat: 6.0328, lng: 80.2156 },
    { name: 'Jaffna', lat: 9.6647, lng: 80.0167 },
    { name: 'Athurugiriya', lat: 6.8922, lng: 79.9428 },
    { name: 'Weligama', lat: 5.9739, lng: 80.4294 },
    { name: 'Matara', lat: 5.95, lng: 80.5333 },
    { name: 'Kolonnawa', lat: 6.9283, lng: 79.895 },
    { name: 'Gampaha', lat: 7.0917, lng: 79.9997 },
    { name: 'Puttalam', lat: 8.033, lng: 79.826 },
    { name: 'Badulla', lat: 6.9847, lng: 81.0564 },
    { name: 'Kalutara', lat: 6.5869, lng: 79.9603 },
    { name: 'Bentota', lat: 6.42, lng: 80 },
    { name: 'Mannar', lat: 8.9667, lng: 79.8833 },
    { name: 'Kurunegala', lat: 7.4833, lng: 80.3667 }
  ];
  

  constructor() { }

  // Function to get latitude and longitude for a given city name
  getLatLong(cityName: string): { lat: number, lng: number } {
    const city = this.cities.find(c => c.name === cityName);
    console.log(city.lat,city.lng)
    return city ? { lat: city.lat, lng: city.lng } : null;
  }

  // Function to get the nearest city name for a given latitude and longitude
  getNearestCity(lat: number, lng: number): string {
    let nearestCity: string = null;
  
    // Find the city with the exact latitude and longitude match
    const city = this.cities.find(city => city.lat === lat && city.lng === lng);
  
    // If a city is found, set the nearestCity to its name
    if (city) {
      nearestCity = city.name;
    }
  
    return nearestCity;
  }
  
}
