import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { SupplierService } from '../service/supplier.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isDropdownOpen: boolean = false;
  constructor(private router: Router, private dataService: DataService,private supplierService: SupplierService) { }
  suppliers: string[] = [];
  locations: any;
  // selectedDateRange: { start: Date, end: Date }; // Property to store selected date range
  selectedDateRange: { start: string, end: string } = { start: '', end: '' };
  selectedSupplier: string = '';
  totalSuppliers: number = 0;
  totalTeaCollection: number = 0;
  defaultLatitude: number = 7.8731;
  defaultLongitude: number = 80.7718;


  ngOnInit(): void {

    this.getSuppliers();
    this.getSupplierLocation();
    console.log(this.suppliers);
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logout(): void {
    // Perform any cleanup operations here if needed
    // For example, clear local storage, session storage, etc.

    // Navigate to the login page
    this.router.navigateByUrl('/login');
  }

  applyFilters() {
    console.log("Selected Supplier:", this.selectedSupplier);
    // Assuming you have a method in your data service to fetch total quantity based on filters
   if(this.selectedSupplier === 'All Suppliers'){
    this.dataService.getAllSupplierQuantity(this.selectedDateRange)
    .subscribe((data: { totalSuppliers: number, totalTeaCollection: number }) => {
      this.totalSuppliers = data.totalSuppliers;
      this.totalTeaCollection = data.totalTeaCollection;
    });
   }
   else{
    this.dataService.getTotalQuantity(this.selectedDateRange, this.selectedSupplier)
    .subscribe((data: { totalSuppliers: number, totalTeaCollection: number }) => {
      this.totalSuppliers = data.totalSuppliers;
      this.totalTeaCollection = data.totalTeaCollection;
    });
   }
  }

  getSuppliers(): void {
    this.supplierService.getSupplierNames()
      .subscribe(
        (suppliers: any[]) => { // Change the type to any[] if you're getting an array of objects
          this.suppliers = suppliers.map(supplier => supplier.supplierName);
          console.log(this.suppliers );
        },
        error => {
          console.error('Error fetching suppliers:', error);
          // Handle error cases here
        }
      );
  }
  getSupplierLocation(): void {
  this.supplierService.getSupplierNames()
    .subscribe(
      (suppliers: any[]) => {
        this.locations = suppliers.map(supplier => ({ lat: supplier.lat, lng: supplier.lng }));
        console.log(this.locations);
      },
      error => {
        console.error('Error fetching supplier locations:', error);
        // Handle error cases here
      }
    );
}
calculateMapBounds(): google.maps.LatLngBounds {
  const bounds = new google.maps.LatLngBounds();
  for (const location of this.locations) {
    bounds.extend(new google.maps.LatLng(location.lat, location.lng));
  }
  return bounds;
}

calculateMapCenter(): google.maps.LatLngLiteral {
  if (this.locations.length === 0) {
    return { lat: this.defaultLatitude, lng: this.defaultLongitude };
  }
  const sum = this.locations.reduce((acc, curr) => {
    return { lat: acc.lat + curr.lat, lng: acc.lng + curr.lng };
  }, { lat: 0, lng: 0 });
  const avg = {
    lat: sum.lat / this.locations.length,
    lng: sum.lng / this.locations.length
  };
  return avg;
}

}
