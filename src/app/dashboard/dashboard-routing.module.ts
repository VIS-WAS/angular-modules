import { NgModule } from '@angular/core';
import { canActivate } from '../RouteGaurds/authGaurd';
import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',

    canActivate: [canActivate],
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRouterModule {}
