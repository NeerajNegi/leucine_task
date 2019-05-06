import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ResidueFormCat2Component } from './residue-form-cat2/residue-form-cat2.component';
import { ResidueFormCat1Component } from './residue-form-cat1/residue-form-cat1.component';
import { SwabFormCat1Component } from './swab-form-cat1/swab-form-cat1.component';
import { SwabFormCat2Component } from './swab-form-cat2/swab-form-cat2.component';
import { RinseFormCat2Component } from './rinse-form-cat2/rinse-form-cat2.component';
import { RinseFormCat1Component } from './rinse-form-cat1/rinse-form-cat1.component';
import { MatRadioModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidueFormCat2Component,
    ResidueFormCat1Component,
    SwabFormCat1Component,
    SwabFormCat2Component,
    RinseFormCat2Component,
    RinseFormCat1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
