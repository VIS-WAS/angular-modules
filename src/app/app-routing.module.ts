import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { canActivate } from './RouteGaurds/authGaurd';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { StatsComponent } from './dashboard/stats/stats.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
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
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
