import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  apiUrl = environment.endPointBase;
  apiKey = environment.apiKey;

  /**
   * ! GET: APOD - Astronomy Picture of the Day
   */

  public getApod(): Observable<any> {
    const subUrl = '/planetary/apod?';
    return this.httpClient.get(this.apiUrl + subUrl + this.apiKey);
  }

  /**
   * ! GET: NEO - Near Earth Object
   */
  public getNeows(START_DATE: Date, END_DATE: Date): Observable<any> {
    const subUrl = '/neo/rest/v1/feed?';
    const and = '&';
    return this.httpClient.get(`${this.apiUrl + subUrl + 'start_date=' + START_DATE + and + 'end_date=' + END_DATE + and + this.apiKey}`);
  }


}
