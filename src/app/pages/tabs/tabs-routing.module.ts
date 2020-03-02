import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'deals',
    component: TabsPage,
    children: [
      {
        path: 'stores',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../stores/stores.module').then(m => m.StoresPageModule)
          }
        ]
      },
      {
        path: 'duration',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../duration/duration.module').then(m => m.DurationPageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../deals-search/deals-search.module').then(m => m.DealsSearchModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/deals/search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/deals/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
