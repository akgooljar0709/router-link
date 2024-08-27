import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  /**
   * Fetches all country data from the REST Countries API.
   * @returns Observable array of country data.
   */
  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

   /**
   * Fetches data for a specific country by name.
   * @param countryName The name of the country to fetch.
   * @returns Observable array containing data for the specific country.
   */
   getCountryByName(countryName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/name/${countryName}`);
  }
}
