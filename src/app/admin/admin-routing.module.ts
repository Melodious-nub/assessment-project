import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: '',
    component: AppAdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'message', component: MessageComponent},
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
