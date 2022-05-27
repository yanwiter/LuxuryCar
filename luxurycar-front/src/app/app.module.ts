import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Import internos

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

//Import para frameworks

import { ToastrModule } from 'ngx-toastr';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
