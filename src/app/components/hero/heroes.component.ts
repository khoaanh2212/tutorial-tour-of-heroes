import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../../objects/hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'heroes-app',
  templateUrl: 'app/templates/heroes.component.html'
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

  deleteHero(hero: Hero): void {
    if (!hero)
      return;

    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero)
          this.selectedHero = null;
      })
  }
}
