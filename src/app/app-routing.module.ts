import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'goal',
    loadChildren: () => import('./pages/goal/goal.module').then( m => m.GoalPageModule)
  },
  {
    path: 'personas',
    loadChildren: () => import('./pages/personas/personas.module').then( m => m.PersonasPageModule)
  },
  {
    path: 'sketches',
    loadChildren: () => import('./pages/sketches/sketches.module').then( m => m.SketchesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
