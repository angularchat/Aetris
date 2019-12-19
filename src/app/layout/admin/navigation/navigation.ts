import {Injectable} from '@angular/core';
import { group } from '@angular/animations';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
 {
    id: 'pages',
    title: 'Aetris',
    type: 'group',
    icon: 'icon-extension',
    children: [
         {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },
      {
        id: 'attedee-sheet',
        title: ' Attendance Sheet ',
        type: 'item',
        url: '/attendances',
        classes: 'nav-item',
        icon: 'feather icon-map'
      },
      {
        id: 'staffs',
        title: 'Staffs',
        type: 'item',
        url: '/staffs',
        classes: 'nav-item',
        icon: 'feather icon-image'
      },
      {
        id: 'visitors',
        title: 'Visitors',
        type: 'item',
        url: '/visitors',
        classes: 'nav-item',
        icon: 'feather icon-file-minus'
      },
      {
        id: 'guests',
        title: 'Guests',
        type: 'item',
        url: '/guests',
        classes: 'nav-item',
        icon: 'feather icon-file-plus'
      },
      {
        id: 'timesheet',
        title: 'Timesheet',
        type: 'collapse',
        icon: 'feather icon-clipboard',
        children: [
          { 
            id: 'timesheet_staffs',
            title: 'Staffs',
            type: 'item',
            url: '/timesheet/staffs',
            param: 'staffs'
          },
          {
            id: 'timesheet_guests',
            title: 'Guests',
            type: 'item',
            url: '/timesheet/guests',
            param: 'guests'
          },
          {
            id: 'timesheet_visitors',
            title: 'Visitors',
            type: 'item',
            url: '/timesheet/visitors',
            param: 'visitors'
          }
        ]
      },
      {
        id: 'reports',
        title: 'Reports',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'reports-staffs',
            title: 'Staffs Reports',
            type: 'item',
            url: '/reports/staffs'
          },
          {
            id: 'staff-timesheets-reports',
            title: 'Staffs Timesheets',
            type: 'item',
            url: '/reports/staff/timesheets'
          },
          {
            id: 'visitor-timesheets-reports',
            title: 'Visitor Timesheets',
            type: 'item',
            url: '/reports/visitor/timesheets'
          },
          {
            id: 'attandance-reports',
            title: 'Attandance Reports',
            type: 'item',
            url: '/attandance/reports'
          },
        
        ]
      },
     
    ]
  }
];


@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}


// {
//   id: 'UserAuth',
//   title: 'User Auth',
//   type: 'item',
//   url: '/userAuth',
//   classes: 'nav-item',
//   icon: 'feather icon-file-plus'
// },