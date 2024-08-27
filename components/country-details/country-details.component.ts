import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryServiceService } from '../../services/country-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent {
  country: any;
  isLoading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryServiceService
  ) {}

  ngOnInit(): void {
    const countryName = this.route.snapshot.paramMap.get('name');

    if (countryName) {
      this.countryService.getAllCountries().subscribe({
        next: (data) => {
          this.country = data.find(c => c.name.common === countryName);
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to load country details';
          this.isLoading = false;
        }
      });
    } else {
      this.error = 'Country name not provided';
      this.isLoading = false;
    }
  }

}
