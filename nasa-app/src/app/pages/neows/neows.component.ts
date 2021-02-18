import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'src/app/app.module';
import { NasaService } from '../../../services/nasa.service';



@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  styleUrls: ['./neows.component.scss']
})

export class NeowsComponent implements OnInit {
  neoObject: any;
  startDate = new Date();
  endDate = this.startDate;

  startDateFormat: any;
  endDateFormat: any;
  titlePage = 'NEO - Feed';
  elementCount = 0;

  errorMessage = null;
  errorFlag = false;
  listDays: any;


  constructor(
    private nasaservice: NasaService,
    public datepipe: DatePipe
  ) { }




  formatDate(sd: any) {
    this.startDateFormat = this.datepipe.transform(sd, 'yyyy-MM-dd');
    this.endDateFormat = this.startDateFormat;
  }

  ngOnInit() {
    this.formatDate(this.startDate);
    this.getNeo(this.startDateFormat, this.endDateFormat);
  }

  getNeo(sd: any, ed: any): void {
    this.nasaservice.getNeows(sd, ed)
      .subscribe(neo => {
        this.errorFlag = false;
        this.elementCount = neo.element_count;

        this.neoObject = neo;
        console.log(this.neoObject);


        // const teste = data.forEach(d => {

        //   let name: string = d.name;
        //   console.log(name);

        // });



      },
        error => {
          this.errorFlag = true;
          this.errorMessage = 'Invalid period. Choose an interval of maximum 7 days';
        });
  }

  onSearch(): void {
    this.formatDate(this.startDate);
    this.getNeo(this.startDateFormat, this.endDateFormat);
  }

}
