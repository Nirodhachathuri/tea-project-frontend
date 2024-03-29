import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-supply-prediction',
  templateUrl: './supply-prediction.component.html',
  styleUrls: ['./supply-prediction.component.css']
})
export class SupplyPredictionComponent implements OnInit {
  isDropdownOpen: boolean = false;
  plotImageUrl: string;
  selectedRange: number =30;
  predictedSupplyData: any[] = [];
  constructor(private router: Router, private http: HttpClient, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    // this.http.get('http://127.0.0.1:5000/plot', { responseType: 'blob' })
    //   .subscribe(blob => {
    //     const objectUrl = URL.createObjectURL(blob);
    //     // Sanitize the blob URL
    //     this.plotImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
    //   });

    this.predictSupply()
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
  // predictSupply(startDate: string, endDate: string): void {
  //   // Make an HTTP request to predict supply based on the date range
  //   this.http.post<any>('http://127.0.0.1:5000/predict-supply', { startDate, endDate })
  //     .subscribe(data => {
  //       // Update the plot image URL with the predicted supply chart
  //       // this.plotImageUrl = data.plotImageUrl;

  //       const objectUrl = URL.createObjectURL(data);
  //   //     // Sanitize the blob URL
  //       this.plotImageUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
  //     });
  // }
  predictSupply(): void {
    // Calculate start and end dates based on selected range
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - this.selectedRange);

    // Make HTTP request to Flask server
    this.http.post<any>('http://127.0.0.1:5000/predict-supply', { startDate, endDate })
      .subscribe(
        response => {
        
          this.plotImageUrl = 'data:image/png;base64,' + response.plotImageUrl;
          // this.predictedSupplyData = response.predictedSupplyData;
          this.predictedSupplyData = JSON.parse(response.predictedSupplyData);
          console.log(typeof this.predictedSupplyData);

        },
        error => {
          console.error('HTTP error:', error);
          // Handle HTTP error if needed
        }
      );
  }
}
