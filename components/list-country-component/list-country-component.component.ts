import { Component, inject, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-country-component',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list-country-component.component.html',
  styleUrl: './list-country-component.component.scss'
})
export class ListCountryComponent implements OnInit {
  countries: any[] = [];
  isLoading: boolean = true;
  error: string | null = null;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private countryService: CountryServiceService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data.map((country) => ({
          name: country.name.common,
          flag: country.flags.png
        }));
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Failed to load country data';
        this.isLoading = false;
      }
    });
  }
}