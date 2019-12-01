import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BriskersComponent } from './comps/briskers/briskers.component';
import { MechablimComponent } from './comps/mechablim/mechablim.component';
import { ChazoneshnikComponent } from './comps/chazoneshnik/chazoneshnik.component';
import { SoneamComponent } from './comps/soneam/soneam.component';

@NgModule({
  declarations: [
    AppComponent,
    BriskersComponent,
    MechablimComponent,
    ChazoneshnikComponent,
    SoneamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
