import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  constructor() { }

  menuItens = [
    {
      item: 0,
      value: 'APOD',
      route: '/index',
    },
    {
      item: 1,
      value: 'NEO',
      route: '/neo',
    }
  ];
}
