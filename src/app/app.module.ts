import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AdminComponent } from './layout/admin/admin.component';
import { NavigationComponent } from './layout/admin/navigation/navigation.component';
import { NavLogoComponent } from './layout/admin/navigation/nav-logo/nav-logo.component';
import { NavContentComponent } from './layout/admin/navigation/nav-content/nav-content.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from './layout/admin/nav-bar/nav-bar.component';
import { NavGroupComponent } from './layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { ToggleFullScreenDirective } from './shared/full-screen/toggle-full-screen';
import { NavLeftComponent } from './layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavigationItem } from './layout/admin/navigation/navigation';
import { NavRightComponent } from './layout/admin/nav-bar/nav-right/nav-right.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { AttendancesheetComponent } from './pages/attendancesheet/attendancesheet.component';
import { StaffsComponent } from './pages/staffs/staffs.component';
import { VisitorsComponent } from './pages/visitors/visitors.component';
import { GuestComponent } from './pages/guest/guest.component';
import { ReportsComponent } from './pages/reports/reports.component';;
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import {DataTableModule} from 'angular-6-datatable';
import { DataTablesModule } from 'angular-datatables';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import {ColorPickerModule} from 'ngx-color-picker';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';;
import { DashboardwidgetsComponent } from './pages/dashboardwidgets/dashboardwidgets.component'
;
import { AddstaffComponent } from './popup/addstaff/addstaff.component'
 import { ToastrModule } from 'ng6-toastr-notifications';
 import { MorrisJsModule } from 'angular-morris-js';;
import { StaffsTimesheetsComponent } from './pages/staffs-timesheets/staffs-timesheets.component';
import { VisitorTimesheetsComponent } from './pages/visitor-timesheets/visitor-timesheets.component';
import { AttandanceReportsComponent } from './pages/attandance-reports/attandance-reports.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { ConfigurationComponent } from './layout/admin/configuration/configuration.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbButtonsModule,
        NgbTabsetModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        DataTableModule,
        DataTablesModule,
        NgbDatepickerModule,
        ColorPickerModule,
        SharedModule,
       // ToastrModule.forRoot()
       MorrisJsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AdminComponent,
        NavigationComponent,
        NavLogoComponent,
        NavContentComponent,
        NavBarComponent,
        NavContentComponent,
        NavGroupComponent,
        NavCollapseComponent,
        NavItemComponent,
        NavBarComponent,
        ToggleFullScreenDirective,
        NavLeftComponent,
        NavSearchComponent,
        NavRightComponent,
        TimesheetComponent,
        AttendancesheetComponent,
        StaffsComponent,
        VisitorsComponent,
        GuestComponent,
        ReportsComponent,
        DashboardComponent,
        DashboardwidgetsComponent,
        AddstaffComponent ,
        StaffsTimesheetsComponent ,
        VisitorTimesheetsComponent,
        AttandanceReportsComponent,
        UserAuthComponent,
        ConfigurationComponent],
        
       
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // provider used to create fake backend
        fakeBackendProvider,
        NavigationItem,
        
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }