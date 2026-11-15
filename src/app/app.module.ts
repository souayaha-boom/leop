import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeopComponent } from './leop-c/leop/leop.component';
import { LeoLoginComponent } from './leop-c/leo-login/leo-login.component';
import { LeopDashComponent } from './leop-c/leop-dash/leop-dash.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LeopComponent,
    LeoLoginComponent,
    LeopDashComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
