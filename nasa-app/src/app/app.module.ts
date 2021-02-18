import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';

import { NasaIndexComponent } from './pages/nasa-index/nasa-index.component';
import { NeowsComponent } from './pages/neows/neows.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopMenuComponent,

    NasaIndexComponent,
    NeowsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
