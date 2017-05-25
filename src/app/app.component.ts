import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  /*template: `
   <h1>{{title}}</h1>
   <h2>{{hero}} details</h2>`,*/
  templateUrl: './app.component.html',
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title: string = 'Tour of heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
