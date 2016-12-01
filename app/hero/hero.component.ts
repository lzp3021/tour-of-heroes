import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero.entity";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  moduleId: module.id,
  templateUrl: 'hero.html',
  styleUrls: ['hero.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['hero-detail', this.selectedHero.id])
  }
}
