import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'stores/:storeID/:storeName', loadChildren: './pages/storeDeals/storeDeals.module#StoreDealsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 