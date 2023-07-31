import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component';
import { InformationComponent } from './information-component/information-component';
import { FirstComponent } from './information-component/first-component/first-component';
import { SecondComponent } from './information-component/second-component/second-component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
