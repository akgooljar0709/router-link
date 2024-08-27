import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCountryComponentComponent } from './list-country-component.component';

describe('ListCountryComponentComponent', () => {
  let component: ListCountryComponentComponent;
  let fixture: ComponentFixture<ListCountryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCountryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCountryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
