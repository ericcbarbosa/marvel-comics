import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicHeroComponent } from './comic-hero/comic-hero.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicsComponent } from './comics.component';

const routes: Routes = [{
  path: 'comics',
  children: [
    { path: '',    component: ComicsComponent },
    { path: ':id', component: ComicDetailComponent },
    { path: 'hero/:id', component: ComicHeroComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule {}