import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashBoardComponent} from '../components/hero/dashboard.component';
import {HeroesComponent} from '../components/hero/heroes.component';
import {HeroDetailComponent} from '../components/hero/hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashBoardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
