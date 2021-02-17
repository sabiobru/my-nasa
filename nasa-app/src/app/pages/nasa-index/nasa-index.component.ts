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
  titlePage = 'Astronomy Picture of the Day';
  imageName: any;
  imageSource: any;

  /**
   * @description: Objeto que a API deve retornar
   */
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

  ngOnInit(): void {
    this.getApod();
  }

  /**
   * @method: getApod
   * @description: Método para retornar 'Astronomy Picture of the Day' (Imagem Astronômica do dia).
   * @returns: object
   */
  public getApod(): void {
    this.nasaService.getApod()
      .subscribe(apod => {
        this.apodObj = apod;
        console.log(this.apodObj);
        this.apodModel.media_type = apod['media_type'];
        this.apodModel.url = apod['url'];
        this.imageName = this.apodModel.url.split('/')[6];
        this.imageSource = this.apodModel.url.split('/')[2];
        this.apodModel.title = apod['title'];
        this.apodModel.explanation = apod['explanation'];
        this.apodModel.date = apod['date'];
      });
  }
}



