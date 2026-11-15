import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeopComponent } from './leop-c/leop/leop.component';
import { LeoLoginComponent } from './leop-c/leo-login/leo-login.component';
import { LeopDashComponent } from './leop-c/leop-dash/leop-dash.component';

const routes: Routes = [
  { path: '', component: LeopComponent, pathMatch: 'full' },
  { path: 'home', component: LeopComponent },
  { path: 'leop-consulting/home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LeoLoginComponent },
  { path: 'dashboard', component: LeopDashComponent },
  { path: 'dash', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
