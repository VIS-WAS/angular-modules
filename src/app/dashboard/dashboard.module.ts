import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CommonModule } from '@angular/common';

// import { AppRoutingModule } from '../app-routing.module';

// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared.module';
import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
// import { canActivate } from '../RouteGaurds/authGaurd';
import { DashboardRouterModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    OverviewComponent,
    StatsComponent,
  ],
  exports: [SharedModule, DashboardRouterModule],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class DashBoardModule {}
