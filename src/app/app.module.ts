import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CronometroComponent } from './cronometro/cronometro.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CronometroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
