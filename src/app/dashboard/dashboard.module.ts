import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { LoaderComponent } from '../Utility/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
    LoaderComponent,
  ],
  exports: [DashboardComponent, CreateTaskComponent, TaskDetailsComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule, HttpClientModule],
})
export class DashBoardModule {}
