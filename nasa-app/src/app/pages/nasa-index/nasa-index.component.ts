import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../../services/nasa.service';
import { analyzeFile } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-nasa-index',
  templateUrl: './nasa-index.component.html',
  styleUrls: ['./nasa-index.component.scss']
})
export class NasaIndexComponent implements OnInit {

  constructor(
    private nasaService: NasaService,
    public sanitizer: DomSanitizer,
  ) { }

  apodObj: any;
  titlePage: string = "Astronomy Picture of the Day";

  apodModel = {
    copyright: '',
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: '',
  };



  ngOnInit() {
    this.getApod();
  }

  /**
   * @method: getApod
   * @description: Método para retornar 'Astronomy Picture of the Day' (Imagem Astronômica do dia).
   * @returns: object
   */
  public getApod() {
    try {
      this.nasaService.getApod()
        .subscribe(apod => {
          this.apodObj = apod;
          console.log(this.apodObj);
          this.apodModel.url = apod['url'];
          this.apodModel.title = apod['title'];
          this.apodModel.explanation = apod['explanation'];
          this.apodModel.date = apod['date'];
        });
    }
    catch { }
  }
}



