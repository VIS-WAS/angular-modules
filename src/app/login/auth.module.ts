import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { SharedModule } from '../shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CounterService } from '../Services/counter.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [CounterService],
})
export class AuthModule {}
