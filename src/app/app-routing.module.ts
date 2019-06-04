import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'services', loadChildren: './pages/services/services.module#ServicesPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'actionsheet', loadChildren: './pages/actionsheet/actionsheet.module#ActionSheetPageModule'},
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'buttons', loadChildren: './pages/buttons/buttons.module#ButtonsPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'check', loadChildren: './pages/check/check.module#CheckPageModule'},
  { path: 'datetime', loadChildren: './pages/datetime/datetime.module#DateTimePageModule'},
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule'},
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'infinite-scroll', loadChildren: './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'inputs', loadChildren: './pages/inputs/inputs.module#InputsPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'list-reorder', loadChildren: './pages/list-reorder/list-reorder.module#ListReorderPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
