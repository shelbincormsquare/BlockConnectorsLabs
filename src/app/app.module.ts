import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomepageComponent,
      PublicLayoutComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
