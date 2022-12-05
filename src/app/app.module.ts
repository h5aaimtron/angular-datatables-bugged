import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Without this import, cli works fine, with it, we get eeInjectorDeclaration errors
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
