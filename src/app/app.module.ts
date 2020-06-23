import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from  '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { environment} from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { StatesComponent } from './states/states.component';
import { HttpClientModule} from '@angular/common/http';
import { ApComponent } from './ap/ap.component';
import { TrailComponent } from './trail/trail.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhatComponent } from './what/what.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { PreventionComponent } from './prevention/prevention.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { FooterComponent } from './footer/footer.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import { TravelDataComponent } from './travel-data/travel-data.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StatesComponent,
    ApComponent,
    TrailComponent,
    TestComponent,
    WhatComponent,
    PreventionComponent,
    FooterComponent,
    TravelDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase) ,
    AngularFireDatabaseModule,
    BrowserAnimationsModule , 
    MatExpansionModule ,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    GoogleChartsModule,
    MatSortModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
