import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../_services/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboardwidgets',
  templateUrl: './dashboardwidgets.component.html',
  styleUrls: ['./dashboardwidgets.component.scss']
})
export class DashboardwidgetsComponent implements OnInit {

  currentUserSubscription: Subscription;
  currentUser: any;

chartLineData = [
  { y: '27 May', a: 500, b: 550 },
  { y: '29 may', a: 525,  b: 600 },
  { y: '31 May', a: 600,  b: 635 },
  { y: '02 Jun', a: 800,  b: 850 },
  { y: '04 Jun', a: 900,  b: 1000 }, 
];

chartLineOptions = {
  responsive: true,
  xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Income', 'Total Outcome'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      lineColors:  ['#02a9f5 ', 'red'],
      pointFillColors: ['#fff'],
      pointStrokeColors:['#02a9f5 ', 'red'],
      parseTime: false,
         ymin: 500,
    ymax: 1500,
  
  

}
// line chart  1 ends here
  constructor( private authenticationService: AuthenticationService ) {
   }

  ngOnInit() {
  }

}
