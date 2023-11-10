import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DialogConfirm, TableContainerComponent } from './table-container/table-container.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as am4core from "@amcharts/amcharts4/core";

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TableContainerComponent,
    MainComponent,
    DialogConfirm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
