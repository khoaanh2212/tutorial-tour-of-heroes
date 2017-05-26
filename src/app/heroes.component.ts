import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'heroes-app',
  templateUrl: './template/heroes.component.html'
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService, private router: Router) {
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

  goToDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  addHero(heroName: string): void {
    heroName.trim();
    if (!heroName) {
      return;
    }
    this.heroService.create(heroName)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });

  }

}
