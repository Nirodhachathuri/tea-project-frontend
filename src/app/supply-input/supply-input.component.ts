import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../service/supplier.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeaSupplyServiceService } from '../service/tea-supply-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supply-input',
  templateUrl: './supply-input.component.html',
  styleUrls: ['./supply-input.component.css']
})
export class SupplyInputComponent implements OnInit {

  suppliers: string[] = [];
  teaSupplyForm: FormGroup;
  successMessage: string = '';
  isDropdownOpen: boolean = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private teaSupplyService: TeaSupplyServiceService, private supplierService: SupplierService) {
    this.teaSupplyForm = this.formBuilder.group({
      suppliedDate: ['', Validators.required],
      supplierName: ['', Validators.required],
      teaVolume: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.getSuppliers();
  }
  

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getSuppliers(): void {
    this.supplierService.getSupplierNames()
      .subscribe(
        (suppliers: any[]) => { // Change the type to any[] if you're getting an array of objects
          this.suppliers = suppliers.map(supplier => supplier.supplierName);
        },
        error => {
          console.error('Error fetching suppliers:', error);
          // Handle error cases here
        }
      );
  }

  onSubmit(): void {
    if (this.teaSupplyForm.valid) {
      const teaSupply = this.teaSupplyForm.value; // Use the form value directly
      this.teaSupplyService.submitTeaSupply(teaSupply)
        .subscribe(
          response => {
            this.successMessage = 'Tea record successfully added!';
            console.log('Tea supply submitted successfully:', response);
            // Handle success cases here
            this.teaSupplyForm.reset();
          },
          error => {
            console.error('Error submitting tea supply:', error);
            // Handle error cases here
          }
        );
    } else {
      // Handle form validation errors
    }
  }
  logout(): void {
    // Perform any cleanup operations here if needed
    // For example, clear local storage, session storage, etc.

    // Navigate to the login page
    this.router.navigateByUrl('/login');
  }
}
