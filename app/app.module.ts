import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {AppComponent} from "./app.component";
import {HeroComponent} from "./hero/hero.component";
import {HeroService} from "./hero/hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'heroes',
      component: HeroComponent
    },{
      path:'hero-detail/:id',
      component:HeroDetailComponent
    }
  ])],
  declarations: [AppComponent, DashboardComponent, HeroComponent, HeroDetailComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule {
}
