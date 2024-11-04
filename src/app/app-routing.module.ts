import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';

const routes: Routes = [
  { path:'', component: LoginComponent, pathMatch: 'full'},
  { path:'signup', component: SignUpComponent},

  // Lazzy Loading Route 1
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./admin/admin.module').then((m) => m.AdminModule),
  },

  // wildCard for notfound
  // { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
