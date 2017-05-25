import {Component} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-app',
  /*template: `
   <h1>{{title}}</h1>
   <h2>{{hero}} details</h2>`,*/
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  selectedHero: Hero;
  heroes: Hero[];

  constructor() {
    this.title = 'Tour of heroes';
    this.heroes = [
      new Hero(11, 'Mr. Nice'),
      new Hero(12, 'Narco'),
      new Hero(13, 'Bombasto'),
      new Hero(14, 'Celeritas'),
      new Hero(15, 'Magneta'),
      new Hero(16, 'RubberMan'),
      new Hero(17, 'Dynama'),
      new Hero(18, 'Dr IQ'),
      new Hero(19, 'Magma'),
      new Hero(20, 'Tornado'),
    ];
    // this.selectedHero = this.heroes[0];
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
