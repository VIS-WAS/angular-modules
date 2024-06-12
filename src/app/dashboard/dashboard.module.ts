import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared.module';
import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    OverviewComponent,
    StatsComponent,
  ],
  exports: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    SharedModule,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule],
})
export class DashBoardModule {}
