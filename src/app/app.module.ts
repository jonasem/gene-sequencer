import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SequenceFormComponent } from './sequence-form/sequence-form.component';
import { AngularMaterialModule } from "./angular-material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SequenceFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
