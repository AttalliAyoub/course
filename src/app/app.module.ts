import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
// material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from './carousel/carousel.component';
import { MatSelectModule } from '@angular/material/select';
// material modules end
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    ToolbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
    // material modules end
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
