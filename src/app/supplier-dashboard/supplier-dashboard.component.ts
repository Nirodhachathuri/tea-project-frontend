import { Component, OnInit } from '@angular/core';
import { CityService } from '../city/city.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-dashboard',
  templateUrl: './supplier-dashboard.component.html',
  styleUrls: ['./supplier-dashboard.component.css']
})
export class SupplierDashboardComponent implements OnInit {

  constructor(private cityService:CityService,private location: Location,private router: Router) { }

  lat: number;
  lng: number;
  supplier:any;
  sname:string;
  semail:string;
  // nearestCity:string;
  isEditMode = false;
  supplier1 = { supplierName: 'Supplier Name', email: 'supplier@example.com' }; // Example data
  nearestCity = 'Example City'; // Example data
  editableSupplier = { ...this.supplier1 };
  editableNearestCity = this.nearestCity;
  editableLoyaltyPoints = 100; // Example data

  ngOnInit(): void {
    // Assume you have the latitude and longitude values available
  
    this.supplier = history.state.supplier;
    this.lat = this.supplier.lat; // Example latitude
    this.lng = this.supplier.lng; // Example longitude
   
    
    this.nearestCity = this.cityService.getNearestCity(this.lat, this.lng); 
    console.log(this.supplier)
  }
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
  saveChanges() {
    // Update original supplier object with edited values
    this.supplier.email = this.supplier.email;
    // You can perform similar operations for other editable fields
    // Make HTTP request to save changes to the server
    // Example: this.supplierService.updateSupplier(this.supplier).subscribe(...);
    // Once changes are saved, exit edit mode
    this.isEditMode = false;
  }
  closeScreen() {
    this.router.navigate(['/login']); // Navigate to the login route
  }
}
