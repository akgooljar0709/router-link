import { Routes } from '@angular/router';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { ListCountryComponent } from './components/list-country-component/list-country-component.component';

export const routes: Routes = [
  {path: '', redirectTo: 'list-countries', pathMatch: 'full'},
  { path: 'list-countries', component: ListCountryComponent },
  { path: 'country/:name', component: CountryDetailsComponent }
];
