import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { concat } from 'rxjs';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  styleUrls: ['./neows.component.scss']
})

export class NeowsComponent implements OnInit {

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 20);
  }

  titlePage = 'NEO - Feed';
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  start_date: any;


  ngOnInit() {
    this.start_date =
      (
        `${this.fromDate['day'] / this.fromDate['month'] / this.fromDate['year']}`
      );
  }

  onDateSelection(date: NgbDate): void {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate): boolean {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate): boolean {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate): boolean {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
