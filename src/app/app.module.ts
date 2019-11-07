import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {IteracionModule} from './iteracion/iteracion.module';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  IteracionModule,
                  HttpClientModule,
                  AppRoutingModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
