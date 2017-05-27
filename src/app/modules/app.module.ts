import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from '../routing/app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from '../mockData/in-memory-data.service';

import {AppComponent} from '../components/basic/app.component';
import {HeroesComponent}  from '../components/hero/heroes.component';
import {DashBoardComponent} from '../components/hero/dashboard.component';
import {HeroDetailComponent} from '../components/hero/hero-detail.component';
import {HeroService} from '../services/hero.service';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashBoardComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
