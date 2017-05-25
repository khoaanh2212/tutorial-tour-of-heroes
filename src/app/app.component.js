"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_1 = require("./hero");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of heroes';
        this.heroes = [
            new hero_1.Hero(11, 'Mr. Nice'),
            new hero_1.Hero(12, 'Narco'),
            new hero_1.Hero(13, 'Bombasto'),
            new hero_1.Hero(14, 'Celeritas'),
            new hero_1.Hero(15, 'Magneta'),
            new hero_1.Hero(16, 'RubberMan'),
            new hero_1.Hero(17, 'Dynama'),
            new hero_1.Hero(18, 'Dr IQ'),
            new hero_1.Hero(19, 'Magma'),
            new hero_1.Hero(20, 'Tornado'),
        ];
        // this.selectedHero = this.heroes[0];
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        /*template: `
         <h1>{{title}}</h1>
         <h2>{{hero}} details</h2>`,*/
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map