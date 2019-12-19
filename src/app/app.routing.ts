import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { AdminComponent } from './layout/admin/admin.component';
import { Component, NgModule } from '@angular/core';
import { AttendancesheetComponent } from './pages/attendancesheet/attendancesheet.component';
import { StaffsComponent } from './pages/staffs/staffs.component';
import { VisitorsComponent } from './pages/visitors/visitors.component';
import { GuestComponent } from './pages/guest/guest.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardwidgetsComponent } from './pages/dashboardwidgets/dashboardwidgets.component';
import { StaffsTimesheetsComponent } from './pages/staffs-timesheets/staffs-timesheets.component';
import { VisitorTimesheetsComponent } from './pages/visitor-timesheets/visitor-timesheets.component';
import { AttandanceReportsComponent } from './pages/attandance-reports/attandance-reports.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardwidgetsComponent },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'attendances', component: AttendancesheetComponent
      },
      {
        path: 'staffs', component: StaffsComponent
      },
      {
        path: 'visitors', component: VisitorsComponent
      },
      {
        path: 'guests', component: GuestComponent
      },
      {
        path: 'userAuth', component: UserAuthComponent
      },
      {
        path: 'timesheet/:type', component: TimesheetComponent
      },
      {
        path: 'reports/:type', component: ReportsComponent
      },
      {
        path: 'reports/staff/timesheets', component: StaffsTimesheetsComponent
      },
      {
        path: 'reports/visitor/timesheets', component: VisitorTimesheetsComponent
      },
      {
        path: 'attandance/reports', component: AttandanceReportsComponent
      },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
  /* , canActivate: [AuthGuard] */
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }