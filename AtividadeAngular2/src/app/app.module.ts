import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { InstallComponent } from './install/install.component';
import { ServicesComponent } from './services/services.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    InstallComponent,
    ServicesComponent,
    PriceTableComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
