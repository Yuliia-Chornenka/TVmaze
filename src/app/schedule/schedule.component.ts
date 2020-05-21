import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shared/services/shows.service';
import { IScheduleItem } from '../shared/interfaces/schedule-item';
import { ICountry } from '../shared/interfaces/country';
import { countries } from '../shared/countries';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: [ './schedule.component.scss' ]
})
export class ScheduleComponent implements OnInit {

  schedule: IScheduleItem[] = [];
  countriesName = [];
  selectedCountry = 'Ukraine';
  minDate = '2010-01-01';
  maxDate = '2020-12-31';
  today = new Date().toISOString();
  isSchedule = true;

  constructor(private showsService: ShowsService) {
  }

  ngOnInit(): void {
    this.getSchedule(this.selectedCountry, this.today);
    this.getCountries();
  }

  getSchedule(country: string, datePicked: string): void {
    const countryToFind = countries.find((countryItem: ICountry) => countryItem.name === country);
    const countryCode = countryToFind.code;

    const date = new Date(datePicked);
    const year = date.getFullYear();
    let month = date.getMonth() + 1 + '';
    let day = date.getDate() + '';

    if (month.length === 1) {
      month = '0' + month;
    }
    if (day.length === 1) {
      day = '0' + day;
    }

    const dateChosen = `${year}-${month}-${day}`;

    this.showsService.getSchedule(countryCode, dateChosen).subscribe(schedule => {
      this.schedule = schedule;
      this.isSchedule = !!schedule.length;
    });
  }

  getCountries(): void {
    countries.forEach((country: ICountry) => {
      if (!this.countriesName.includes(country.name)) {
        this.countriesName.push(country.name);
        this.countriesName.sort();
      }
    });
  }
}
