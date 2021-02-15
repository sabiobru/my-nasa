import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

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
   ** GET: APOD - Astronomy Picture of the Day
   */
  public getApod() {
    let subUrl = "/planetary/apod";
    return this.httpClient.get(this.apiUrl + subUrl + this.apiKey);
  }



}
