import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../service/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-management',
  templateUrl: './supplier-management.component.html',
  styleUrls: ['./supplier-management.component.css']
})
export class SupplierManagementComponent implements OnInit {

  successMessage: string = '';
  isDropdownOpen: boolean = false;

  supplierForm: FormGroup;

  constructor(private fb: FormBuilder, private supplierService: SupplierService,private router: Router) { }

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      supplierName: ['', Validators.required],
      address: ['', Validators.required],
      contactNumbers: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.supplierForm.valid) {
      const formData = this.supplierForm.value;
      this.supplierService.registerSupplier(formData).subscribe(
        response => {
          console.log('Supplier registered successfully:', response);
          this.successMessage = 'Supplier registered successfully!';
          // Reset form after successful submission
          this.supplierForm.reset();
        },
        error => {
          console.error('Failed to register supplier:', error);
          // Handle error, e.g., display error message to user
        }
      );
    } else {
      // Handle form validation errors
    }
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
}
